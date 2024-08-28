import { type ReactNode, createContext, useContext } from 'react'
import { type IStories$, Stories$ } from './stores/Stories.store'
const storeContext = createContext<IStories$ | null>(null)

export const stories$ = Stories$.create({})

export const useStories$ = (): IStories$ => {
    const store = useContext(storeContext)
    if (!store) {
        throw new Error('useStories$ shall be used within StoreProvider')
    }

    return store
}

export const Stories$Provider = ({ children, store }: { children: ReactNode; store: IStories$ }) => {
    return <storeContext.Provider value={store}>{children}</storeContext.Provider>
}
