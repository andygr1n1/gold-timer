import { generateClient } from '@/api/client'
import { resolveError } from '@/helpers/tryCatchRequest'
import type { TadaDocumentNode } from 'gql.tada'
import type { Variables } from 'graphql-request'

export const graphqlBaseQuery = async ({ body, variables }: { body: unknown; variables?: Variables }) => {
    const client = await generateClient()
    try {
        const data = await client.request(body as TadaDocumentNode, variables)
        return { data }
    } catch (error) {
        await resolveError(error)
        return { error: { status: 500, data: error } }
    }
}
