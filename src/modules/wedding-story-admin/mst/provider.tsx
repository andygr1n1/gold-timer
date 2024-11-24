import { type ReactNode, createContext, useContext } from 'react'
import { type IInvitationEditorDialog$, InvitationEditorDialog } from './stores/InvitationEditorDialog.store'
const storeContext = createContext<IInvitationEditorDialog$ | null>(null)

export const invitationEditorDialog$ = InvitationEditorDialog.create({})

export const useInvitationEditorDialog$ = (): IInvitationEditorDialog$ => {
    const store = useContext(storeContext)
    if (!store) {
        throw new Error('useInvitationEditorDialog$ shall be used within StoreProvider')
    }

    return store
}

export const InvitationEditorDialog$Provider = ({
    children,
    store,
}: {
    children: ReactNode
    store: IInvitationEditorDialog$
}) => {
    return <storeContext.Provider value={store}>{children}</storeContext.Provider>
}
