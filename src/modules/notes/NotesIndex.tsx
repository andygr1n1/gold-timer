import { ModuleWrapper } from '@/components/ModuleWrapper'
import { APP_ROUTES_ENUM } from '@/services/enums'
import { observer } from 'mobx-react-lite'
import { NotesList } from './components/NotesList'
import { NotesHeader } from './components/NotesHeader'
import { NoteCRUD } from './components/crud-note/NoteCRUD'

const NotesIndex: React.FC = observer(function NotesIndex() {
    return (
        <ModuleWrapper context={APP_ROUTES_ENUM.NOTES}>
            <div className='flex flex-col gap-10 w-full max-w-[600px] mx-auto'>
                <NotesHeader />
                <NotesList />
            </div>
            <NoteCRUD />
        </ModuleWrapper>
    )
})

export default NotesIndex
