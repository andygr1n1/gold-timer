import { useNotesStore } from '@/StoreProvider'
import { ModuleWrapper } from '@/components/ModuleWrapper'
import { AddNew } from '@/components/buttons/AddNew.button'
import { APP_ROUTES_ENUM } from '@/helpers/enums'
import { useWindowMatchMedia } from '@/hooks/useMatchMedia.hook'
import { NotesList } from '@/modules/notes/components/NotesList'
import { observer } from 'mobx-react-lite'
import { NotesSettingsIcon } from './components/NotesSettingsIcon'
import { NotesTagsSelect } from './components/filters/NotesTagsSelect'
import { SearchNotesInput } from './components/filters/SearchNotesInput'
import { CRUD_NoteDialog } from './components/crud-note/CRUD_NoteDialog'
import { NotesDeleted } from './components/filters/NotesDeleted'
import notesImage from '@/assets/notes-1.png'
export const NotesIndex: React.FC = observer(function NotesIndex() {
    const { isMobile } = useWindowMatchMedia(['isMobile'])
    const {
        openNoteCreateMode,
        notes_filter$: { notes, show_deleted },
    } = useNotesStore()

    return (
        <ModuleWrapper
            context={APP_ROUTES_ENUM.NOTES}
            topBarNodes={
                <div className='flex w-full items-center justify-center gap-4 xl:px-20'>
                    <SearchNotesInput />
                    <NotesSettingsIcon />
                </div>
            }
        >
            <div className='flex flex-col gap-5 xl:px-20'>
                {!isMobile && (
                    <div className='mt-5 flex justify-between gap-5'>
                        <div className='flex items-center justify-center'>
                            <NotesTagsSelect />
                            <NotesDeleted />
                        </div>
                        <AddNew
                            title={'Add new note'}
                            onClick={() => {
                                openNoteCreateMode()
                            }}
                        />
                    </div>
                )}
                <NotesList />
                {!!!notes.length && !show_deleted && (
                    <img
                        className='absolute-center pointer-events-none h-[200px] w-[200px] opacity-10'
                        src={notesImage}
                    />
                )}
            </div>
            {/*  */}
            {/* DIALOG */}
            <CRUD_NoteDialog />
        </ModuleWrapper>
    )
})
