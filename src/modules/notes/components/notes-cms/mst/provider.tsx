import { type ReactNode, createContext, useContext } from 'react'
import { type INotes$, Notes$ } from './stores/Notes.store'
const storeContext = createContext<INotes$ | null>(null)

export const notes$ = Notes$.create({})

export const useNotes$ = (): INotes$ => {
    const store = useContext(storeContext)
    if (!store) {
        throw new Error('useLabel$ shall be used within StoreProvider')
    }

    return store
}

export const Notes$Provider = ({ children, store }: { children: ReactNode; store: INotes$ }) => {
    return <storeContext.Provider value={store}>{children}</storeContext.Provider>
}
