import { resolveError } from '@/helpers/tryCatchRequest'
import { type IGoalSlide, goalSlideSchema } from '../types'
import { generateClient } from '@/graphql/client'
import { graphql } from '@/graphql/tada'
import { fragment_goalSlidesResponse } from './fragment_goalSlidesResponse'

export const mutation_insertGoalSlide = async (props: {
    imgPath: string
    title: string
}): Promise<IGoalSlide | undefined> => {
    try {
        const { title, imgPath } = props

        const client = await generateClient()

        const mutation = graphql(
            `
                mutation mutation_insertGoalSlide($title: String!, $img_path: String!) {
                    insert_goals_slides_one(object: { title: $title, img_path: $img_path }) {
                        ...GoalSlidesResponseFr
                    }
                }
            `,
            [fragment_goalSlidesResponse],
        )

        const res = await client.request(mutation, {
            title,
            img_path: imgPath,
        })

        return goalSlideSchema.parse(res?.insert_goals_slides_one)
    } catch (e) {
        return await resolveError(e)
    }
}
