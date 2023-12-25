import { gql } from 'graphql-request'
import { generateClient } from '../../../graphql/client'
import { RITUAL_TYPE_ENUM } from '@/helpers/enums'
import { processError } from '@/functions/processMessage'

export const mutation_updateRitualInterval = async (
    goal_id: string,
    ritual_interval: number,
    ritual_type: RITUAL_TYPE_ENUM,
): Promise<number | undefined> => {
    const client = generateClient()

    const mutation = gql`
        mutation mutation_updateRitualInterval(
            $goal_id: uuid!
            $ritual_interval: Int
            $ritual_type: ritual_type_enum_enum
        ) {
            update_goals_rituals(
                where: { goal_id: { _eq: $goal_id } }
                _set: { ritual_interval: $ritual_interval, ritual_type: $ritual_type }
            ) {
                returning {
                    ritual_interval
                }
            }
        }
    `

    try {
        const response = await client.request(mutation, { goal_id, ritual_interval, ritual_type })

        return response.update_goals_rituals.returning?.[0]?.ritual_interval
    } catch (e) {
        processError(e, 'mutation_updateRitualInterval error')
        return
    }
}
