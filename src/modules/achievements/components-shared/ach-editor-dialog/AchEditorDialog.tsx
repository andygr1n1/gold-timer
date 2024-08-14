import { XModal } from '@/components-x/x-modal/XModal'
import { Suspense, lazy } from 'react'
import { useAchEditor$ } from './stores/useAchEditor.store'
const AchEditor = lazy(() => import('./components/AchEditor'))
const AchEditorTitle = lazy(() => import('./components/ach-editor-form-title/AchEditorTitle'))

const AchEditorDialog = () => {
    const { open, onCancel } = useAchEditor$()

    return (
        <XModal
            open={open}
            fullHeight
            onCancel={onCancel}
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
}

export default AchEditorDialog
