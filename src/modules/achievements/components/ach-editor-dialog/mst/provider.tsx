import { type ReactNode, createContext, useContext } from 'react'
import { type IAchEditorDialog$, AchEditorDialog$ } from './stores/AchEditorDialog.store'
const storeContext = createContext<IAchEditorDialog$ | null>(null)

export const achEditorDialog$ = AchEditorDialog$.create({})

export const useAchEditorDialog$ = (): IAchEditorDialog$ => {
    const store = useContext(storeContext)
    if (!store) {
        throw new Error('useAchEditorDialog$ shall be used within StoreProvider')
    }

    return store
}

export const AchEditorDialog$Provider = ({
    children,
    store,
}: {
    children: ReactNode
    store: IAchEditorDialog$
}) => {
    return <storeContext.Provider value={store}>{children}</storeContext.Provider>
}
