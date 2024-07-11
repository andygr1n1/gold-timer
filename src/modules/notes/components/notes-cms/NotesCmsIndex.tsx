import { observer } from 'mobx-react-lite'
import { Navigate, Route, Routes } from 'react-router-dom'
import { NotesByFilterIndex } from './NotesByFilterIndex'

const NotesCmsIndex: React.FC = observer(function NotesIndex() {

    return (
        <Routes>
            <Route
                path={'/'}
                element={<Navigate to={`/notes/filtered-notes?filter=active`} state={{ filter: 'active' }} />}
            />
            <Route path='filtered-notes' element={<NotesByFilterIndex />} />
        </Routes>
    )
})

export default NotesCmsIndex
