import { graphql } from '@/api/tada'
import { fragment_notepadResponse } from './fragment_notepadResponse'

export const queryNotepad = () => {
    return graphql(
        `
            query query_fetchNotepad {
                notepad {
                    ...NotepadResponseFr
                }
            }
        `,
        [fragment_notepadResponse],
    )
}
