import { createContext, ReactNode, useContext } from 'react'
import type { IRoot$ } from './mst/types'
import { Root$ } from './mst/stores/Root.store'
const storeContext = createContext<IRoot$ | null>(null)

const generateRoot$ = () => Root$.create({})

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

export const useUserStore = () => useRootStore().user$

export const useSprintsStore = () => useRootStore().sprints$

export const useGoalsStore = () => useRootStore().goals$

export const useGoalsSlidesStore = () => useRootStore().goals_slides$

export const useNotesStore = () => useRootStore().notes$

// modal windows
export const useGoalsManagerStore = () => useRootStore().modal_windows$.goals_manager_mw$

// side menu
export const useSideMenuStore = () => useRootStore().side_menu$
