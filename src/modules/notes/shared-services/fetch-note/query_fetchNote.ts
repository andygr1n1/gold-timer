import { resolveError } from '@/helpers/tryCatchRequest'
import { generateClient } from '@/graphql/client'
import { type INoteSchema, noteSchema } from '../types'
import { graphql } from '@/graphql/tada'
import { noteResponseFr } from '../fragments/noteResponseFr'

export const query_fetchNote = async (props: { id: string | null }): Promise<INoteSchema | undefined> => {
    try {
        const { id } = props

        if (!id) return

        const client = await generateClient()

        const query = graphql(
            `
                query query_fetchNote($id: uuid!) {
                    notes_by_pk(id: $id) {
                        ...NoteResponseFr
                    }
                }
            `,
            [noteResponseFr],
        )

        const data = await client.request(query, { id })

        return noteSchema.parse(data.notes_by_pk)
    } catch (e) {
        return await resolveError(e)
    }
}
