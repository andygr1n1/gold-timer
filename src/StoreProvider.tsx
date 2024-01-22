import { createContext, ReactNode, useContext } from 'react'
import type { IRoot$ } from './mst/types'
import { Root$ } from './modules/login/stores/Root.store'
const storeContext = createContext<IRoot$ | null>(null)

const generateRoot$ = () => Root$.create({})

export const rootStore$ = generateRoot$()

export const ProtectedStoreProvider: React.FC<{ children?: ReactNode; userId: string }> = ({ children, userId }) => {
    rootStore$.user$.onChangeField('id', userId)
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

// side menu
export const useSideMenuStore = () => useRootStore().side_menu$
