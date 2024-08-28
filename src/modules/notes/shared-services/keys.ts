import { type INoteStatus } from './types'
export const notesKeys = {
    /*stores*/
    useNotesFilters$: () => ['useNotesFilters$'],
    useNoteEditor$: () => ['useNoteEditor$'],
    useNoteTag$: () => ['useNoteTag$'],

    /*queries*/
    useFetchNotes: (
        limit: number,
        queryFilter: INoteStatus,
        serverSearchInput: string,
        userId: string,
        label?: string,
    ) => ['notesKeys', 'useFetchNotes', limit, queryFilter, serverSearchInput, userId, label],
    useFetchNote: (filter: { id: string | null }) => ['notesKeys', 'useFetchNote', filter.id],
    // fetchOrgs: (filter: IOrgFilter) => ['fetchOrgs', filter ? JSON.stringify(filter) : ''],
}
