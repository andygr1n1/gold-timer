import { createContext, ReactNode, useContext } from 'react'
import { Login$ } from './stores/Login.store'
import { ILogin$ } from './types'

const loginStoreContext = createContext<ILogin$ | null>(null)

const generateRoot$ = () => Login$.create({})

export const rootStore$ = generateRoot$()

export const LoginStoreProvider: React.FC<{ children?: ReactNode }> = ({ children }) => {
    return <loginStoreContext.Provider value={rootStore$}>{children}</loginStoreContext.Provider>
}

export const useLoginStore = (): ILogin$ => {
    const store = useContext(loginStoreContext)
    if (!store) {
        throw new Error('some information shall be used within useLoginStore')
    }

    return store
}
