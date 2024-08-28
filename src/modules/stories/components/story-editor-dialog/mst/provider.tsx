import { type ReactNode, createContext, useContext } from 'react'
import { type IStoryEditorDialog$, StoryEditorDialog$ } from './stores/StoryEditorDialog.store'
const storeContext = createContext<IStoryEditorDialog$ | null>(null)

export const storyEditorDialog$ = StoryEditorDialog$.create({})

export const useStoryEditorDialog$ = (): IStoryEditorDialog$ => {
    const store = useContext(storeContext)
    if (!store) {
        throw new Error('useStoryEditorDialog$ shall be used within StoreProvider')
    }

    return store
}

export const StoryEditorDialog$Provider = ({
    children,
    store,
}: {
    children: ReactNode
    store: IStoryEditorDialog$
}) => {
    return <storeContext.Provider value={store}>{children}</storeContext.Provider>
}
