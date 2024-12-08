import { resolveError } from '@/helpers/tryCatchRequest'
import { generateClient } from '@/graphql/client'
import { userSchema } from '@/services/types'
import { type IQueryUserDetails } from './types'
import { graphql } from '@/graphql/tada'

export const query_userDetails = async (props: { userId: string }): Promise<IQueryUserDetails | undefined> => {
    try {
        const { userId } = props

        const client = await generateClient()

        const query = graphql(`
            query query_userDetails($userId: uuid!) {
                heroes_by_pk(id: $userId) {
                    id
                    role
                    coins
                    avatar
                    phone
                    email
                    birthday
                }
                goals(
                    where: {
                        owner_id: { _eq: $userId }
                        deleted_at: { _is_null: true }
                        status: { _eq: "active" }
                        goal_ritual: { ritual_power: { _gt: 0 } }
                    }
                ) {
                    goal_ritual {
                        ritual_power
                    }
                }
            }
        `)

        return await client
            .request(query, {
                userId,
            })
            .then((response) => {
                const user = userSchema.parse(response.heroes_by_pk)

                const ritualPower = response?.goals
                    .filter((goal) => goal.goal_ritual)
                    .reduce((acc, goal) => (acc += Number(goal.goal_ritual?.ritual_power)), 0)

                return { user, ritualPower }
            })
    } catch (e) {
        return await resolveError(e)
    }
}
