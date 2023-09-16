import { observer } from 'mobx-react-lite'
import { INote$ } from '../../mst/types'
import { format } from 'date-fns'
import { Icon } from '@iconify/react'
import { NoteMenu } from './note-menu/NoteMenu'
import { NoteTagsList } from '../NoteTagsList'
export const Note: React.FC<{ note: INote$ }> = observer(({ note }) => {
    return (
        <div className='bg-global-2-bg flex h-[200px] w-[calc(100%-40px)] flex-col gap-5 overflow-auto rounded-lg p-5 md:w-fit md:max-w-[25%] md:flex-[20%] '>
            {note.created_at && (
                <div className='flex justify-between'>
                    <div className='text-xs'>{format(note.created_at, 'dd MMM, yyyy')}</div>
                    <NoteMenu note={note} />
                </div>
            )}

            <div className='overflow-wrap-anywhere relative flex flex-auto indent-6 leading-6'>
                <Icon
                    icon='mdi:eye'
                    className='text-xBlue-2 hover:text-xBlue-1 absolute left-0 top-0 min-w-[20px] cursor-pointer'
                    width={20}
                    height={20}
                />
                {note.description}
            </div>
            <NoteTagsList note={note} />
        </div>
    )
})
