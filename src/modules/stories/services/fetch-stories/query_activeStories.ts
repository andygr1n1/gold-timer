import { type IStory } from '../types'
import { resolveError } from '@/helpers/tryCatchRequest'
import { generateClient } from '@/api/client'
import { graphql } from '@/api/tada'
import { storyResponseFr } from '../fragments/storyResponseFr'

export const query_activeStories = async (props: {
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
                        order_by: [{ is_favorite: desc }, { updated_at: desc }]
                        where: {
                            _and: [
                                { deleted_at: { _is_null: true }, archived: { _eq: false }, title: { _ilike: $title } }
                                { _or: [{ created_by: { _eq: $userId } }, { users: { _contains: [$userId] } }] }
                            ]
                        }
                    ) {
                        ...StoryResponseFr
                    }
                }
            `,
            [storyResponseFr],
        )

        const result = await client
            .request(query, { limit, userId, offset, title: '%' + serverSearchInput + '%' })
            .then((res) => res?.stories)

        return result
    } catch (e) {
        return await resolveError(e)
    }
}
