import { generateClient } from '../../../graphql/client'
import { resolveError } from '@/helpers/tryCatchRequest'
import { graphql } from '@/graphql/tada'
import { goalSlidesResponseFr } from './fragments/goalSlidesResponseFr'
import { goalSlideSchema } from './types'

export const mutation_deleteGoalSlide = async (props: { id: string }) => {
    try {
        const { id } = props

        const client = await generateClient()

        const mutation = graphql(`
            mutation mutation_deleteGoalSlide($id: uuid!) {
                delete_goals_slides_by_pk(id: $id) {
                    ...GoalSlidesResponseFr
                }
            }
        `, [goalSlidesResponseFr])

        const res = await client.request(mutation, {
            id,
        })


        return goalSlideSchema.parse(res?.delete_goals_slides_by_pk)
    } catch (e) {
        return await resolveError(e)
    }
}
