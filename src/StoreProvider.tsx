import { createContext, ReactNode, useContext } from 'react'
import type { IRoot$ } from './mst/types'
import { Root$ } from './mst/stores/Root.store'
import { STATUS_ENUM } from './helpers/enums'
const storeContext = createContext<IRoot$ | null>(null)

const generateRoot$ = () => Root$.create({ goals$: { goals_checked_list: [STATUS_ENUM.FROZEN, STATUS_ENUM.ACTIVE] } })

export const rootStore$ = generateRoot$()

export const StoreProvider: React.FC<{ children?: ReactNode }> = ({ children }) => {
    return <storeContext.Provider value={rootStore$}>{children}</storeContext.Provider>
}

export const useRootStore = (): IRoot$ => {
    const store = useContext(storeContext)
    if (!store) {
        throw new Error('use Store shall be used within StoreProvider')
    }

    return store
}

export const useGoalsStore = () => useRootStore().goals$

export const useUserStore = () => useRootStore().user$
