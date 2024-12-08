import { generateClient } from '@/graphql/client'
import { resolveError } from '@/helpers/tryCatchRequest'
import { type INoteSchema, noteSchema } from '@/modules/notes/shared-services/types'
import { graphql } from '@/graphql/tada'
import { noteResponseFr } from './fragments/noteResponseFr'

export const mutation_updateNoteIsFavorite = async ({
    id,
    isFavorite,
}: {
    id: string
    isFavorite: boolean
}): Promise<INoteSchema | undefined> => {
    try {
        const client = await generateClient()

        const query = graphql(
            `
                mutation mutation_updateNoteIsFavorite($id: uuid!, $isFavorite: Boolean!) {
                    update_notes_by_pk(pk_columns: { id: $id }, _set: { is_favorite: $isFavorite }) {
                        ...NoteResponseFr
                    }
                }
            `,
            [noteResponseFr],
        )

        const data = await client.request(query, { id, isFavorite })

        return noteSchema.parse(data.update_notes_by_pk)
    } catch (e) {
        return await resolveError(e)
    }
}
