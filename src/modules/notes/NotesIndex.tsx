import { ModuleWrapper } from '@/components/ModuleWrapper'
import { APP_ROUTES_ENUM } from '@/helpers/enums'
import { observer } from 'mobx-react-lite'
import { NotesList } from './components/NotesList'
import { NotesHeader } from './components/NotesHeader'
import { CRUD_NoteDialog } from './components/crud-note/CRUD_NoteDialog'

export const NotesIndex: React.FC = observer(function NotesIndex() {
    return (
        <ModuleWrapper context={APP_ROUTES_ENUM.NOTES}>
            <div className='flex flex-col gap-10 w-full max-w-[600px] mx-auto'>
                <NotesHeader />
                <NotesList />
            </div>
            <CRUD_NoteDialog />
        </ModuleWrapper>
    )
})
