import { gql } from 'graphql-request'
import { generateClient } from '../../../graphql/client'
import { processError } from '@/functions/processError.helper'
import { IGoalSlide$SnIn } from '../mst/types'
import { getOwnerId } from '@/functions/getUserId'

export const mutation_insertGoalSlide = async (
    imgPath: string,
    title: string,
): Promise<IGoalSlide$SnIn | undefined> => {
    const client = generateClient()
    const owner_id = getOwnerId()

    const mutation = gql`
        mutation mutation_insertGoalSlide($owner_id: uuid, $imgPath: String, $title: String) {
            insert_goals_slides_one(object: { owner_id: $owner_id, img_path: $imgPath, title: $title }) {
                created_at
                img_path
                title
                id
            }
        }
    `

    try {
        const response = await client.request(mutation, { owner_id, imgPath, title })

        return response.insert_goals_slides_one
    } catch (e) {
        processError(e, 'mutation_insertGoalSlide error')
        return
    }
}