import { generateClient } from '@/api/client'
import { resolveError } from '@/helpers/tryCatchRequest'
import { type INoteSchema, noteSchema } from '@/modules/notes/shared-services/types'
import { graphql } from '@/api/tada'
import { noteResponseFr } from './fragments/noteResponseFr'

export const mutation_updateNoteDeletedAt = async ({
    id,
    deletedAt,
}: {
    id: string
    deletedAt: string | null
}): Promise<INoteSchema | undefined> => {
    try {
        const client = await generateClient()

        const query = graphql(
            `
                mutation mutation_updateNoteDeletedAt($id: uuid!, $deletedAt: timestamptz) {
                    update_notes_by_pk(pk_columns: { id: $id }, _set: { deleted_at: $deletedAt }) {
                        ...NoteResponseFr
                    }
                }
            `,
            [noteResponseFr],
        )

        const data = await client.request(query, { id, deletedAt })

        return noteSchema.parse(data.update_notes_by_pk)
    } catch (e) {
        return await resolveError(e)
    }
}
