import { storyResponseFr } from '../fragments/storyResponseFr'
import { resolveError } from '@/helpers/tryCatchRequest'
import { generateClient } from '@/api/client'
import { graphql } from '@/api/tada'
import type { IStory } from '../types'

export const query_allStories = async (props: {
    userId: string
    serverSearchInput: string
    limit: number
    offset?: number
    label?: string
}): Promise<IStory[] | undefined> => {
    const { limit, userId, serverSearchInput, offset } = props
    try {
        const client = await generateClient()

        const query = graphql(
            `
                query query_stories($limit: Int, $offset: Int, $title: String, $userId: uuid!) {
                    stories(
                        limit: $limit
                        offset: $offset
                        order_by: { updated_at: desc }
                        where: {
                            _and: [
                                { title: { _ilike: $title } }
                                { _or: [{ created_by: { _eq: $userId } }, { users: { _contains: [$userId] } }] }
                            ]
                        }
                    ) {
                        id
                        ...StoryResponseFr
                    }
                }
            `,
            [storyResponseFr],
        )

        return await client
            .request(query, { limit, userId, offset, title: '%' + serverSearchInput + '%' })
            .then((res) => res?.stories)
    } catch (e) {
        return await resolveError(e)
    }
}
