import { AddNote } from './AddNote'
import { LabelFilterSelect } from './LabelFilterSelect'
import { NotesFilterSelect } from './NotesFilterSelect'
import { SearchNotesInput } from './SearchNotesInput'
import { SelectedLabel } from './SelectedLabel'

export const NotesHeader: React.FC = () => {
    return (
        <div className='flex w-full mx-auto gap-8'>
            <div className='flex flex-col w-full gap-4'>
                <div className='flex justify-between items-center'>
                    <AddNote />
                    <SelectedLabel />
                </div>
                <div className='flex w-full items-center justify-end gap-2'>
                    <SearchNotesInput />
                    <div className='flex gap-2 w-[108px]'>
                        <NotesFilterSelect />
                        <LabelFilterSelect />
                    </div>
                </div>
            </div>
        </div>
    )
}
