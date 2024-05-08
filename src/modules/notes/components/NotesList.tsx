import { useNotesStore } from '@/app/StoreProvider'
import { observer } from 'mobx-react-lite'
import { Note } from './note/Note'
import { useEffect } from 'react'
import { useWindowMatchMedia } from '@/hooks/useMatchMedia.hook'

export const NotesList: React.FC = observer(() => {
    const { isMobile } = useWindowMatchMedia(['isMobile'])

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
                <Note key={t.id} note={t} isMobile={isMobile} />
            ))}
        </div>
    )
})
