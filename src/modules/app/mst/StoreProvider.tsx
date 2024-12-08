import { createContext, type ReactNode, useContext } from 'react'
import type { IRoot$ } from './types'
import { Root$ } from './stores/Root.store'
const storeContext = createContext<IRoot$ | null>(null)

const generateRoot$ = ({ darkTheme }: { darkTheme: boolean }) => Root$.create({ darkTheme })

const generateTheme = () => {
    const dark = localStorage.getItem('dark') === 'false' ? false : true
    document.querySelector('html')!.setAttribute('dark', dark.toString())
    return dark
}

export const root$ = generateRoot$({ darkTheme: generateTheme() })

export const useRoot$ = (): IRoot$ => {
    const store = useContext(storeContext)
    if (!store) {
        throw new Error('use Store shall be used within StoreProvider')
    }

    return store
}

export const Root$Provider = ({ children, store }: { children: ReactNode; store: IRoot$ }) => {
    return <storeContext.Provider value={store}>{children}</storeContext.Provider>
}

export const useSprintsStore = () => useRoot$().sprints$

export const useUser$ = () => useRoot$().user
