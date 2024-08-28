import { resolveError, tryCatchRequest } from '@/helpers/tryCatchRequest'
import { generateTSClient } from '@/graphql/client'
import { type IUserSchema, userSchema } from '@/services/types'

export const mutation_userCoins = async (props: {
    coins: number
    userId: string
}): Promise<IUserSchema | undefined> => {
    const { coins, userId } = props

    return await tryCatchRequest<Promise<undefined>, IUserSchema | undefined>(
        async () => {
            const client = await generateTSClient()

            const statusRes = await client
                .mutation({
                    __name: 'mutation_userCoins',
                    update_heroes_by_pk: {
                        __args: {
                            pk_columns: {
                                id: userId,
                            },
                            _set: { coins },
                        },
                        id: true,
                        role: true,
                        coins: true,
                        avatar: true,
                        phone: true,
                        email: true,
                        birthday: true,
                    },
                })
                .then((response) => {
                    const zParse = userSchema.parse(response.update_heroes_by_pk)
                    return zParse
                })

            return statusRes
        },
        async (e) => await resolveError(e),
    )
}
