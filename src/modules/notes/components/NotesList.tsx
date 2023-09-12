import { useNotesStore } from '@/StoreProvider'
import { observer } from 'mobx-react-lite'
import { useEffect } from 'react'
import { Note } from './note/Note'

export const NotesList: React.FC = observer(() => {
    const {
        fetchNotes,
        notes_filter$: { filteredNotes },
    } = useNotesStore()

    useEffect(() => {
        fetchNotes()
    }, [])

    return (
        <div className='flex w-full flex-col gap-5 md:flex-row md:flex-wrap'>
            {filteredNotes.map((t) => (
                <Note key={t.id} note={t} />
            ))}
        </div>
    )
})
