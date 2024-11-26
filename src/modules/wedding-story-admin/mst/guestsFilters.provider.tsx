import { type ReactNode, createContext, useContext } from 'react'

import { type IGuestsFilters$, GuestsFilters$ } from './stores/GuestsFilters.store'
import { applySnapshot } from 'mobx-state-tree'

const storeContext = createContext<IGuestsFilters$ | null>(null)

const initiateStore = () => {
    const store = GuestsFilters$.create({})
    const localData = localStorage.getItem('guestsFilters')
    if (localData) {
        applySnapshot(store, JSON.parse(localData))
    }
    return store
}

export const guestsFilters$ = initiateStore()

export const useGuestsFilters$ = (): IGuestsFilters$ => {
    const store = useContext(storeContext)
    if (!store) {
        throw new Error('useGuestsFilters$ shall be used within StoreProvider')
    }

    return store
}

export const GuestsFilters$Provider = ({ children, store }: { children: ReactNode; store: IGuestsFilters$ }) => {
    return <storeContext.Provider value={store}>{children}</storeContext.Provider>
}
