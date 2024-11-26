import { XModal } from '@/components-x/x-modal/XModal'
import { Suspense, lazy } from 'react'
import { useInvitationEditorDialog$ } from '../../mst/invitationEditorDialog.provider'
import { observer } from 'mobx-react-lite'
const InvitationEditor = lazy(() => import('./components/InvitationEditor'))
const InvitationEditorTitle = lazy(() => import('./components/InvitationEditorTitle'))

const CreateInvitationEditor = observer(() => {
    const { open, onClose } = useInvitationEditorDialog$()

    return (
        <XModal
            open={open}
            fullHeight
            onCancel={onClose}
            title={
                <Suspense fallback={null}>
                    <InvitationEditorTitle />
                </Suspense>
            }
        >
            {open && (
                <Suspense fallback={null}>
                    <InvitationEditor />
                </Suspense>
            )}
        </XModal>
    )
})
export default CreateInvitationEditor
