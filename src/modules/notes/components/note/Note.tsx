import { observer } from 'mobx-react-lite'
import { INote$ } from '../../mst/types'
import { format } from 'date-fns'
import { Interweave } from 'interweave'
import { NoteMenu } from './note-menu/NoteMenu'
import { NoteTagsList } from '../NoteTagsList'
export const Note: React.FC<{ note: INote$ }> = observer(({ note }) => {
    return (
        <div className='bg-global-2-bg flex h-[200px] w-[calc(100%-40px)] flex-col gap-5 overflow-auto rounded-lg p-5 md:w-fit md:max-w-[20%] md:flex-[20%] '>
            {note.created_at && (
                <div className='flex justify-between'>
                    <div className='text-xs'>{format(note.created_at, 'dd MMM, yyyy')}</div>
                    <NoteMenu note={note} />
                </div>
            )}
            {/* <div className='overflow-wrap-anywhere relative flex flex-auto  leading-6'>{note.description}</div> */}
            <Interweave
                className='overflow-wrap-anywhere'
                allowAttributes
                disableMatchers
                disableFilters
                allowElements
                content={note.description}
            />
            <NoteTagsList note={note} />
        </div>
    )
})
