import { graphql } from '@/api/tada'

export const fragment_notepadResponse = graphql(`
    fragment NotepadResponseFr on notepad @_unmask {
        id
        description
        locked
    }
`)
