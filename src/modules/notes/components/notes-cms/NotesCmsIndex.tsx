import { observer } from 'mobx-react-lite'
import { Navigate, Route, Routes } from 'react-router-dom'
import { NotesByFilterIndex } from './NotesByFilterIndex'
import { useEffect } from 'react'
import { useRestoreNoteModuleParams } from './hooks/useRestoreNoteModuleParams'

const NotesCmsIndex: React.FC = observer(function NotesIndex() {
    const { location, params, filter, label } = useRestoreNoteModuleParams()

    useEffect(() => {
        if (params && location.pathname.includes('notes/filtered-notes')) {
            localStorage.setItem('notes-module-restore-url', location.pathname + location.search)
        }
    }, [location])

    return params ? (
        <Routes>
            <Route path={'/'} element={<Navigate to={`/notes/filtered-notes?${params}`} state={{ filter, label }} />} />
            <Route path='filtered-notes' element={<NotesByFilterIndex />} />
        </Routes>
    ) : null
})

export default NotesCmsIndex
