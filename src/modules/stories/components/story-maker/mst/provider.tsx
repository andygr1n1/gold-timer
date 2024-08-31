import { type ReactNode, createContext, useContext } from 'react'
import { type IStoryMaker$, StoryMaker$ } from './stores/StoryMaker.store'
const storeContext = createContext<IStoryMaker$ | null>(null)

export const storyMaker$ = StoryMaker$.create({})

export const useStoryMaker$ = (): IStoryMaker$ => {
    const store = useContext(storeContext)
    if (!store) {
        throw new Error('useStoryMaker$ shall be used within StoreProvider')
    }

    return store
}

export const StoryMaker$Provider = ({ children, store }: { children: ReactNode; store: IStoryMaker$ }) => {
    return <storeContext.Provider value={store}>{children}</storeContext.Provider>
}
