import { ReactNode, createContext, useContext } from 'react'
import { ILabelDialog$, LabelDialog$ } from './stores/LabelDialog.store'
const storeContext = createContext<ILabelDialog$ | null>(null)

export const labelDialog$ = LabelDialog$.create({})

export const useLabelDialog$ = (): ILabelDialog$ => {
    const store = useContext(storeContext)
    if (!store) {
        throw new Error('useLabel$ shall be used within StoreProvider')
    }

    return store
}

export const LabelDialog$Provider = ({ children, store }: { children: ReactNode; store: ILabelDialog$ }) => {
    return <storeContext.Provider value={store}>{children}</storeContext.Provider>
}
