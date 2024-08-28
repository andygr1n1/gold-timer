import { storyResponseFragment } from '../storyResponseFragment'
import { storiesResponseSchema } from '../types'
import { type IStorySchema } from '../types'
import { resolveError } from '@/helpers/tryCatchRequest'
import { generateURQLClient } from '@/graphql/client'
import { graphql } from '@/graphql/tada'

export const query_allStories = async (props: {
    userId: string
    serverSearchInput: string
    limit: number
    offset?: number
    label?: string
}): Promise<IStorySchema[] | undefined> => {
    const { limit, userId, serverSearchInput, offset } = props

    const query = graphql(
        `
            query query_stories($limit: Int, $offset: Int, $title: String, $userId: uuid!) {
                stories(
                    limit: $limit
                    offset: $offset
                    order_by: { created_at: desc }
                    where: {
                        _and: [
                            { title: { _ilike: $title } }
                            { _or: [{ created_by: { _eq: $userId } }, { users: { _contains: [$userId] } }] }
                        ]
                    }
                ) {
                    id
                    ...StoryFragment
                }
            }
        `,
        [storyResponseFragment],
    )

    const urqlClient = await generateURQLClient()

    try {
        const result = await urqlClient
            .query(query, { limit, userId, offset, title: '%' + serverSearchInput + '%' })
            .then((res) => storiesResponseSchema.parse(res.data?.stories))

        return result
    } catch (e) {
        await resolveError(e)
        return
    }
}
