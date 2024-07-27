import { AddNote } from './AddNote'
import { NotesFilterSelect } from './NotesFilterSelect'
import { SearchNotesInput } from './SearchNotesInput'

export const NotesHeader: React.FC = () => {
    return (
        <div className='flex w-full mx-auto gap-8'>
            <div className='flex flex-col w-full gap-4'>
                <AddNote />
                <div className='flex w-full items-center justify-end gap-2'>
                    <SearchNotesInput />
                    <div className='flex gap-2 w-[108px]'>
                        <NotesFilterSelect />
                    </div>
                </div>
            </div>
        </div>
    )
}
