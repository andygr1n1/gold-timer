import { XModal } from '@/components-x/x-modal/XModal'
import { Suspense, lazy } from 'react'
import { useAchEditorDialog$ } from './mst/provider'
import { observer } from 'mobx-react-lite'
const AchEditor = lazy(() => import('./components/AchEditor'))
const AchEditorTitle = lazy(() => import('./components/ach-editor-form-title/AchEditorTitle'))

const AchEditorDialog = observer(() => {
    const { open, onClose } = useAchEditorDialog$()

    return (
        <XModal
            open={open}
            fullHeight
            onCancel={onClose}
            title={
                <Suspense fallback={null}>
                    <AchEditorTitle />
                </Suspense>
            }
        >
            {open && (
                <Suspense fallback={null}>
                    <AchEditor />
                </Suspense>
            )}
        </XModal>
    )
})
export default AchEditorDialog
