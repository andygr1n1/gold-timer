import { storyResponseFr } from '../fragments/storyResponseFr'
import { type IStory } from '../types'
import { resolveError } from '@/helpers/tryCatchRequest'
import { generateClient } from '@/graphql/client'
import { graphql } from '@/graphql/tada'

export const query_deletedStories = async (props: {
    userId: string
    serverSearchInput: string
    limit: number
    offset?: number
    label?: string
}): Promise<IStory[] | undefined> => {
    const { limit, userId, serverSearchInput, offset } = props

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
                            { deleted_at: { _is_null: false }, title: { _ilike: $title } }
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

    try {
        return await client
            .request(query, { limit, userId, offset, title: '%' + serverSearchInput + '%' })
            .then((res) => res?.stories)
    } catch (e) {
        return await resolveError(e)
    }
}
