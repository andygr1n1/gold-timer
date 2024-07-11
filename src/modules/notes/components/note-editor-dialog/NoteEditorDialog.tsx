import { XModal } from '@/components-x/x-modal/XModal'
import { Suspense, lazy } from 'react'
import { useNoteEditor$ } from './stores/note-editor-store/useNoteEditor.store'
const NoteEditor = lazy(() => import('./components/NoteEditor'))
const NoteEditorTitle = lazy(() => import('./components/note-editor-form-title/NoteEditorTitle'))

const NoteEditorDialog = () => {
    const { store, onCancel } = useNoteEditor$()

    return (
        <XModal
            open={store.open}
            fullHeight
            onCancel={onCancel}
            title={
                <Suspense fallback={null}>
                    <NoteEditorTitle />
                </Suspense>
            }
        >
            {store.open && (
                <Suspense fallback={null}>
                    <NoteEditor />
                </Suspense>
            )}
        </XModal>
    )
}

export default NoteEditorDialog
