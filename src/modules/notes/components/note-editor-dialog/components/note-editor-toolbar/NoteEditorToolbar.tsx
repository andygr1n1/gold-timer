import { useFormikContext } from 'formik'
import { useNoteEditor$ } from '../../stores/note-editor-store/useNoteEditor.store'
import { type INoteSchema } from '@/modules/notes/shared-services/types'
import { ToggleFavoriteNewNote } from './components/ToggleFavoriteNewNote'
import { NoteIsFavorite } from '@/modules/notes/shared-components/note-is-favorite/NoteIsFavorite'
import { NoteIsArchived } from '@/modules/notes/shared-components/note-is-archived/NoteIsArchived'
import { NoteIsDeleted } from '@/modules/notes/shared-components/note-is-deleted/NoteIsDeleted'

export const NoteEditorToolbar = () => {
    const { store } = useNoteEditor$()
    const formikContext = useFormikContext<INoteSchema>()

    return (
        <div className='relative flex w-full min-h-[32px] flex-wrap items-center justify-center gap-5'>
            {/* {store.id && <ToggleEditNote id={store.id} />} */}
            {!store.id ? (
                <ToggleFavoriteNewNote />
            ) : (
                <NoteIsFavorite id={store.id} isFavorite={!!formikContext.values.is_favorite} />
            )}
            {store.id && <NoteIsArchived id={store.id} isArchived={!!formikContext.values.archived} />}
            {store.id && <NoteIsDeleted id={store.id} deletedAt={!!formikContext.values.deleted_at} />}
        </div>
    )
}
