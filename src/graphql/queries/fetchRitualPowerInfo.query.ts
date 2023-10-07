import { GOAL_STATUS_ENUM } from '@/helpers/enums'
import { gql } from 'graphql-request'
import { generateClient } from '../client'
import { processError } from '@/helpers/processError.helper'

export const fetchRitualPowerInfo = async (owner_id: string) => {
    const client = generateClient()

    const query = gql`
        query fetchRitualPowerInfo($owner_id: uuid) {
            goals_rituals(
                where: { goal: { owner_id: { _eq: $owner_id }, status: { _eq: ${GOAL_STATUS_ENUM.ACTIVE} } } }
                order_by: { ritual_power: desc }
            ) {
                ritual_power
                goal {
                    title
                }
            }
        }
    `

    try {
        const response = await client.request(query, { owner_id })
        return response.goals_rituals
    } catch (e) {
        processError(e, 'fetchRitualPowerInfo error')
        return
    }
}
