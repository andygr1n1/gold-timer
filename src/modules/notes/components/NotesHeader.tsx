import { SearchNotesInput } from './filters/SearchNotesInput'
import { NotesTagsSelectButton } from './filters/NotesTagsSelectButton'
import { NotesStatusSelect } from './filters/NotesStatusSelect'
import { ActiveTagsList } from './ActiveTagsList'
import { AddNote } from './AddNote'

export const NotesHeader: React.FC = () => {
    return (
        <>
            <div className='flex w-full mx-auto gap-8'>
                <div className='flex flex-col w-full gap-4'>
                    <AddNote />
                    <div className='flex w-full items-center justify-end gap-2'>
                        <SearchNotesInput />
                        <NotesTagsSelectButton />
                        <NotesStatusSelect />
                    </div>
                </div>
            </div>
            <ActiveTagsList />
        </>
    )
}
