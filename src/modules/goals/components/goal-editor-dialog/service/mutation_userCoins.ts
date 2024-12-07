import { resolveError } from '@/helpers/tryCatchRequest'
import { generateClient } from '@/graphql/client'
import { type IUserSchema, userSchema } from '@/services/types'
import { graphql } from '@/graphql/tada'

export const mutation_userCoins = async (props: {
    coins: number
    userId: string
}): Promise<IUserSchema | undefined> => {
    try {
        const { coins, userId } = props

        const client = await generateClient()

        const mutation = graphql(`
            mutation mutation_userCoins($coins: Int!, $userId: uuid!) {
                update_heroes_by_pk(pk_columns: { id: $userId }, _set: { coins: $coins }) {
                    id
                    role
                    coins
                    avatar
                    phone
                    email
                    birthday
                }
            }
        `)

        const res = await client.request(mutation, { coins, userId })
        return userSchema.parse(res?.update_heroes_by_pk)
    } catch (e) {
        return await resolveError(e)
    }
}
