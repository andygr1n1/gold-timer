import { XModal } from '@/components-x/x-modal/XModal'
import { Suspense, lazy } from 'react'
import { useStoryEditorDialog$ } from './mst/provider'
import { observer } from 'mobx-react-lite'
const StoryEditor = lazy(() => import('./components/StoryEditor'))
const StoryEditorTitle = lazy(() => import('./components/StoryEditorTitle'))

const StoryEditorDialog = observer(() => {
    const { open, onChangeField } = useStoryEditorDialog$()

    return (
        <XModal
            open={open}
            fullHeight
            onCancel={() => {
                onChangeField('open', false)
            }}
            title={
                <Suspense fallback={null}>
                    <StoryEditorTitle />
                </Suspense>
            }
        >
            {open && (
                <Suspense fallback={null}>
                    <StoryEditor />
                </Suspense>
            )}
        </XModal>
    )
})
export default StoryEditorDialog
