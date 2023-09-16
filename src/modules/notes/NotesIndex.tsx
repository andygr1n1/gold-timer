import { useNotesStore } from '@/StoreProvider'
import { ModuleWrapper } from '@/components/ModuleWrapper'
import { AddNew } from '@/components/buttons/AddNew.button'
import { APP_ROUTES_ENUM } from '@/helpers/enums'
import { useWindowMatchMedia } from '@/hooks/useMatchMedia.hook.'
import { NotesList } from '@/modules/notes/components/NotesList'
import { observer } from 'mobx-react-lite'
import { NotesSettingsIcon } from './components/NotesSettingsIcon'
import { NotesTagsSelect } from './components/filters/NotesTagsSelect'
import { NoteMenuDialogConfirm } from './components/note/note-menu/NoteMenuDialogConfirm'
import { SearchNotesInput } from './components/filters/SearchNotesInput'

export const NotesIndex: React.FC = observer(function NotesIndex() {
    const { isMobile } = useWindowMatchMedia(['isMobile'])
    const { activateCreateEditMode } = useNotesStore()

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
                        <NotesTagsSelect />
                        <AddNew
                            title={'Add new note'}
                            onClick={() => {
                                activateCreateEditMode({ note: null })
                            }}
                        />
                    </div>
                )}
                <NotesList />
            </div>
            {/*  */}
            {/* D I A L O G */}
            {/*  */}
            <NoteMenuDialogConfirm />
        </ModuleWrapper>
    )
})
