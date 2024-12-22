import { resolveError } from '@/helpers/tryCatchRequest'
import { graphql } from '@/api/tada'
import { fragment_goalSlidesResponse } from './fragment_goalSlidesResponse'
import { goalSlideSchema } from '../types'
import { generateClient } from '@/api/client'

export const mutation_deleteGoalSlide = async (props: { id: string }) => {
    try {
        const { id } = props

        const client = await generateClient()

        const mutation = graphql(
            `
                mutation mutation_deleteGoalSlide($id: uuid!) {
                    delete_goals_slides_by_pk(id: $id) {
                        ...GoalSlidesResponseFr
                    }
                }
            `,
            [fragment_goalSlidesResponse],
        )

        const res = await client.request(mutation, {
            id,
        })

        return goalSlideSchema.parse(res?.delete_goals_slides_by_pk)
    } catch (e) {
        return await resolveError(e)
    }
}
