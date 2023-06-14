import { gql } from 'graphql-request'
import { generateClient } from '../client'

export interface IFetchEmailByRestoreCode {
    restore_codes_by_pk: { email: string }
}

export const fetchEmailByRestoreCode = async (code: string): Promise<string | undefined> => {
    const client = generateClient()

    const query = gql`
        query restore_codes($code: uuid!) {
            restore_codes_by_pk(id: $code) {
                email
            }
        }
    `

    try {
        const response: IFetchEmailByRestoreCode = await client.request(query, { code })

        return response.restore_codes_by_pk?.email
    } catch (e) {
        console.error('fetchEmailByRestoreCode error:', e)
        return
    }
}
