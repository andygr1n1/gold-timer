import { useNotesStore } from '@/StoreProvider'
import { observer } from 'mobx-react-lite'
import { Note } from './note/Note'
import { useEffect } from 'react'

export const NotesList: React.FC = observer(() => {
    const {
        fetchNotes,
        notes_filter$: { filteredNotes },
    } = useNotesStore()

    useEffect(() => {
        fetchNotes()
    }, [])

    return (
        <div className='flex flex-col gap-10 w-full'>
            {filteredNotes.map((t) => (
                <Note key={t.id} note={t} />
            ))}
        </div>
    )
})
