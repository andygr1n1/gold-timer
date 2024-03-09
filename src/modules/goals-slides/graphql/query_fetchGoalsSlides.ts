import { gql } from 'graphql-request'
import { generateClient } from '../../../graphql/client'
import { processError } from '@/functions/processMessage'
import { IGoalSlide$SnIn } from '../mst/types'
import { getUserId } from '@/functions/getUserData'

export const query_fetchGoalsSlides = async (): Promise<IGoalSlide$SnIn[] | undefined> => {
    const client = generateClient()
    const owner_id = getUserId()

    const query = gql`
        query query_fetchGoalsSlides($owner_id: uuid) {
            goals_slides(where: { owner_id: { _eq: $owner_id } }) {
                id
                img_path
                active
                title
                created_at
            }
        }
    `

    try {
        const response: any = await client.request(query, { owner_id })

        return response.goals_slides
    } catch (e) {
        processError(e, 'query_fetchGoalsSlides error')
        return
    }
}
