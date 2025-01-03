import { XModal } from '@/components-x/x-modal/XModal'
import { Suspense, lazy } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectOpen, updateField } from '../../services/weddingStoryEditorSlice'
const InvitationEditor = lazy(() => import('./components/InvitationEditor'))
const InvitationEditorTitle = lazy(() => import('./components/InvitationEditorTitle'))

const CreateInvitationEditor = () => {
    const open = useSelector(selectOpen)

    const dispatch = useDispatch()

    const onClose = () => {
        dispatch(updateField({ field: 'open', value: false }))
    }

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
}
export default CreateInvitationEditor
