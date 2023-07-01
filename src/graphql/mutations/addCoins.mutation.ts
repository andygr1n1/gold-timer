import { rootStore$ } from '@/StoreProvider'
import { gql } from 'graphql-request'
import { generateClient } from '../client'
import { processError } from '@/helpers/processError.helper'

export const addCoinsMutation = async (coins: number): Promise<number | undefined> => {
    const client = generateClient()

    try {
        const hero_id = rootStore$.user$.id
        if (!hero_id) throw new Error('addCoinsMutation, hero_id is undefined')

        const mutation = gql`
            mutation addCoins($hero_id: uuid!, $coins: Int) {
                update_heroes_by_pk(pk_columns: { id: $hero_id }, _set: { coins: $coins }) {
                    coins
                }
            }
        `

        const response = await client.request(mutation, { hero_id, coins })

        return response.update_heroes_by_pk.coins
    } catch (e) {
        processError(e, 'addCoins error')
        return
    }
}
