import { observer } from 'mobx-react-lite'
import { INote$ } from '../../mst/types'
import { format } from 'date-fns'
import { Interweave } from 'interweave'
import { NoteMenu } from './note-menu/NoteMenu'
import { NoteTagsList } from '../NoteTagsList'
import styles from './Note.module.scss'
export const Note: React.FC<{ note: INote$ }> = observer(({ note }) => {
    return (
        <div className={styles['note-container']}>
            {note.created_at && (
                <div className='flex justify-between'>
                    <div className='text-xs'>{format(note.created_at, 'dd MMM, yyyy')}</div>
                    <NoteMenu note={note} />
                </div>
            )}
            {/* <div className='overflow-wrap-anywhere relative flex flex-auto  leading-6'>{note.description}</div> */}

            <Interweave
                className='overflow-wrap-anywhere flex h-full flex-auto cursor-pointer '
                allowAttributes
                disableMatchers
                disableFilters
                allowElements
                content={note.description.length > 80 ? note.description.slice(0, 80) + ' ... ' : note.description}
            />
            <NoteTagsList note={note} />
        </div>
    )
})
