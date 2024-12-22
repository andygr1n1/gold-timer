import { generateClient } from '@/api/client'
import { resolveError } from '@/helpers/tryCatchRequest'
import { type INoteSchema, noteSchema } from '@/modules/notes/shared-services/types'
import { graphql } from '@/api/tada'
import { noteResponseFr } from './fragments/noteResponseFr'

export const mutation_updateNoteIsArchived = async ({
    id,
    isArchived,
}: {
    id: string
    isArchived: boolean
}): Promise<INoteSchema | undefined> => {
    try {
        const client = await generateClient()

        const query = graphql(
            `
                mutation mutation_updateNoteIsArchived($id: uuid!, $isArchived: Boolean!) {
                    update_notes_by_pk(pk_columns: { id: $id }, _set: { archived: $isArchived }) {
                        ...NoteResponseFr
                    }
                }
            `,
            [noteResponseFr],
        )

        const data = await client.request(query, { id, isArchived })

        return noteSchema.parse(data.update_notes_by_pk)
    } catch (e) {
        return await resolveError(e)
    }
}
