import { createContext, useContext } from 'react'
import type { IRoot$ } from './types'
import { Root$ } from './stores/Root.store'
const storeContext = createContext<IRoot$ | null>(null)

const generateRoot$ = () => Root$.create({})

export const rootStore$ = generateRoot$()

export const useRootStore = (): IRoot$ => {
    const store = useContext(storeContext)
    if (!store) {
        throw new Error('use Store shall be used within StoreProvider')
    }

    return store
}

export const useSprintsStore = () => useRootStore().sprints$
