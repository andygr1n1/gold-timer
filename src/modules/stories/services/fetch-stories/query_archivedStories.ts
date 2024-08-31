import { storyResponseFr } from '../fragments/storyResponseFr'
import { type IStory } from '../types'
import { resolveError } from '@/helpers/tryCatchRequest'
import { generateURQLClient } from '@/graphql/client'
import { graphql } from '@/graphql/tada'

export const query_archivedStories = async ({
    limit,
    userId,
    serverSearchInput,
    offset,
}: {
    userId: string
    serverSearchInput: string
    limit: number
    offset?: number
    label?: string
}): Promise<IStory[] | undefined> => {
    const query = graphql(
        `
            query query_stories($limit: Int, $offset: Int, $title: String, $userId: uuid!) {
                stories(
                    limit: $limit
                    offset: $offset
                    order_by: { created_at: desc }
                    where: {
                        _and: [
                            { deleted_at: { _is_null: true }, archived: { _eq: true }, title: { _ilike: $title } }
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

    const urqlClient = await generateURQLClient()

    try {
        const result = await urqlClient
            .query(query, { limit, userId, offset, title: '%' + serverSearchInput + '%' })
            .then((res) => res.data?.stories)

        return result
    } catch (e) {
        await resolveError(e)
        return
    }
}
