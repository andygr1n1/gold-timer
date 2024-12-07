import { generateClient } from '../../../graphql/client'
import { resolveError } from '@/helpers/tryCatchRequest'
import { goalSlideSchema } from './types'
import { graphql } from '@/graphql/tada'

export const mutation_deleteGoalSlide = async (props: { id: string }) => {
    try {
        const { id } = props

        const client = await generateClient()

        const mutation = graphql(`
            mutation mutation_deleteGoalSlide($id: uuid!) {
                delete_goals_slides_by_pk(id: $id) {
                    id
                }
            }
        `)

        const res = await client.request(mutation, {
            id,
        })

        return goalSlideSchema.parse(res?.delete_goals_slides_by_pk)
    } catch (e) {
        return await resolveError(e)
    }
}
