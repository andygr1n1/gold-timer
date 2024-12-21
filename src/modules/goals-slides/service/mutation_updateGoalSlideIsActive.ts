import { generateClient } from '../../../graphql/client'
import { resolveError } from '@/helpers/tryCatchRequest'
import { type IGoalSlide, goalSlideSchema } from './types'
import { graphql } from '@/graphql/tada'
import { goalSlidesResponseFr } from './fragments/goalSlidesResponseFr'

export const mutation_updateGoalSlideIsActive = async (props: {
    id: string
    active: boolean
}): Promise<IGoalSlide | undefined> => {
    try {
        const { id, active } = props

        const client = await generateClient()

        const mutation = graphql(`
            mutation mutation_updateGoalSlideIsActive($id: uuid!, $active: Boolean!) {
                update_goals_slides_by_pk(pk_columns: { id: $id }, _set: { active: $active }) {
                    ...GoalSlidesResponseFr
                }
            }
        `, [goalSlidesResponseFr])

        const res = await client.request(mutation, {
            id,
            active,
        })

        return goalSlideSchema.parse(res?.update_goals_slides_by_pk)
    } catch (e) {
        return await resolveError(e)
    }
}
