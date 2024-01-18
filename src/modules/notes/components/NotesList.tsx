import { useNotesStore } from '@/StoreProvider'
import { observer } from 'mobx-react-lite'
import { Note } from './note/Note'
import styles from './note/Note.module.scss'
import clsx from 'clsx'

export const NotesList: React.FC = observer(() => {
    const {
        notes_filter$: { filteredNotes },
    } = useNotesStore()

    return (
        <div className='flex w-full flex-col gap-5 md:flex-row md:flex-wrap'>
            {filteredNotes.map((t) => (
                <Note key={t.id} note={t} />
            ))}
            <div className={clsx(styles['note-container'], '!bg-transparent')} />
            <div className={clsx(styles['note-container'], '!bg-transparent')} />
        </div>
    )
})
