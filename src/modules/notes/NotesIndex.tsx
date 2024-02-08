import { useNotesStore } from '@/StoreProvider'
import { ModuleWrapper } from '@/components/ModuleWrapper'
import { APP_ROUTES_ENUM } from '@/lib/enums'
import { useWindowMatchMedia } from '@/hooks/useMatchMedia.hook'
import { NotesList } from '@/modules/notes/components/NotesList'
import { observer } from 'mobx-react-lite'
import { SearchNotesInput } from './components/filters/SearchNotesInput'
import { CRUD_NoteDialog } from './components/crud-note/CRUD_NoteDialog'
import notesImage from '@/assets/notes-1.png'
import { GoalsSlidesCarouselWidget } from '../goals-slides/GoalsSlidesCarouselWidget'
import { ArtifactsCounter } from '../dashboard/components/artifacts-counter/ArtifactsCounter'
import { Icon } from '@iconify/react'
import { CreateNewNote } from './components/create-note-dashboard/CreateNewNote'
import { NotesStatusSelect } from './components/filters/NotesStatusSelect'
import { NotesFiltersTextHelper } from './components/NotesFiltersTextHelper'
import { NotesTagsSelectButton } from './components/filters/NotesTagsSelectButton'
import { ActiveTagsList } from './components/ActiveTagsList'
export const NotesIndex: React.FC = observer(function NotesIndex() {
    const { isLargeDesktop } = useWindowMatchMedia(['isDesktop', 'isLargeDesktop'])
    const {
        notes_filter$: { notes },
    } = useNotesStore()

    return (
        <ModuleWrapper
            context={APP_ROUTES_ENUM.NOTES}
            topBarNodes={
                <>
                    <ArtifactsCounter />
                    {/* DIALOG */}
                    <CRUD_NoteDialog />
                </>
            }
        >
            <div className='mb-5 flex flex-wrap justify-start gap-8'>
                <CreateNewNote />
                {isLargeDesktop && <GoalsSlidesCarouselWidget />}
                <div className='flex w-full flex-col gap-8'>
                    <div className='relative flex items-center justify-center '>
                        <Icon
                            icon='ion:book'
                            className='flex h-[50px] w-[50px] select-none text-slate-800 opacity-20 duration-300'
                        />
                    </div>
                    <div className='flex flex-col-reverse items-center justify-between gap-8 xl:flex-row xl:gap-0'>
                        <NotesFiltersTextHelper />
                        <div className=' flex w-full items-center justify-end gap-2'>
                            <SearchNotesInput />
                            <NotesTagsSelectButton />
                            <NotesStatusSelect />
                        </div>
                    </div>

                    <ActiveTagsList />
                    <NotesList />

                    {!!!notes.length && (
                        <img
                            className='absolute-center pointer-events-none h-[200px] w-[200px] opacity-10'
                            src={notesImage}
                        />
                    )}
                </div>
            </div>
            {/*  */}
            {/* DIALOG */}
            <CRUD_NoteDialog />
        </ModuleWrapper>
    )
})
