import { resolveError, tryCatchRequest } from '@/helpers/tryCatchRequest'
import { generateTSClient } from '@/graphql/client'
import { userSchema } from '@/services/types'
import { goalStatusEnum } from '../types'
import { type IQueryUserDetails } from './types'

export const query_userDetails = async (props: { userId: string }): Promise<IQueryUserDetails | undefined> => {
    const { userId } = props
    return await tryCatchRequest<Promise<undefined>, IQueryUserDetails | undefined>(
        async () => {
            const client = await generateTSClient()
            return await client
                .query({
                    __name: 'query_userDetails',
                    heroes_by_pk: {
                        __args: { id: userId },
                        id: true,
                        role: true,
                        coins: true,
                        avatar: true,
                        phone: true,
                        email: true,
                        birthday: true,
                    },
                    goals: {
                        __args: {
                            where: {
                                owner_id: { _eq: userId },
                                deleted_at: { _is_null: true },
                                status: { _eq: goalStatusEnum.active },
                                goal_ritual: { ritual_power: { _gt: 0 } },
                            },
                        },
                        goal_ritual: {
                            ritual_power: true,
                        },
                    },
                })
                .then((response) => {
                    const user = userSchema.parse(response.heroes_by_pk)

                    const ritualPower = response?.goals
                        .filter((goal) => goal.goal_ritual)
                        .reduce((acc, goal) => (acc += Number(goal.goal_ritual?.ritual_power)), 0)

                    return { user, ritualPower }
                })
        },
        async (e) => await resolveError(e),
    )
}
