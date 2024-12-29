import { graphql } from '@/api/tada'
import { fragment_notepadResponse } from './fragment_notepadResponse'

export const mutationUpsertNotepad = () => {
    return graphql(
        `
            mutation mutation_upsertNotepad($object: notepad_insert_input!) {
                insert_notepad_one(
                    object: $object
                    on_conflict: { constraint: notepad_pkey, update_columns: [description, locked] }
                ) {
                    ...NotepadResponseFr
                }
            }
        `,
        [fragment_notepadResponse],
    )
}
