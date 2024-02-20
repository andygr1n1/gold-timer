import { NotesFiltersTextHelper } from './NotesFiltersTextHelper'
import { SearchNotesInput } from './filters/SearchNotesInput'
import { NotesTagsSelectButton } from './filters/NotesTagsSelectButton'
import { NotesStatusSelect } from './filters/NotesStatusSelect'
import { ActiveTagsList } from './ActiveTagsList'

export const NotesHeader: React.FC = () => {
    return (
        <>
            <div className='flex w-full flex-col-reverse items-center justify-between gap-8  xl:flex-row xl:gap-0'>
                <NotesFiltersTextHelper />
                <div className=' flex w-full items-center justify-end gap-2'>
                    <SearchNotesInput />
                    <NotesTagsSelectButton />
                    <NotesStatusSelect />
                </div>
            </div>
            <ActiveTagsList />
        </>
    )
}
