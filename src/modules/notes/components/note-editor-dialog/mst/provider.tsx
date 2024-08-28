import { type ReactNode, createContext, useContext } from 'react'
import { type INoteEditorDialog$, NoteEditorDialog$ } from './stores/useNoteTag.store'
const storeContext = createContext<INoteEditorDialog$ | null>(null)

export const noteEditorDialog$ = NoteEditorDialog$.create({})

export const useNoteEditorDialog$ = (): INoteEditorDialog$ => {
    const store = useContext(storeContext)
    if (!store) {
        throw new Error('NoteEditorDialog$ shall be used within StoreProvider')
    }

    return store
}

export const NoteEditorDialog$Provider = ({ children, store }: { children: ReactNode; store: INoteEditorDialog$ }) => {
    return <storeContext.Provider value={store}>{children}</storeContext.Provider>
}
