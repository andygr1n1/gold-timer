import { ModuleWrapper } from '@/components/ModuleWrapper'
import { APP_ROUTES_ENUM } from '@/services/enums'
import { useLocation } from 'react-router-dom'
import { NotesHeader } from './components/NotesHeader'
import { Suspense } from 'react'
import NoteEditorDialog from '../note-editor-dialog/NoteEditorDialog'
import { NotesCards } from './components/NotesCards'
import { INoteStatus } from '../../shared-services/types'

export const NotesByFilterIndex: React.FC = () => {
    const location = useLocation()
    const queryFilter: INoteStatus = location.state?.filter

    return (
        <ModuleWrapper context={APP_ROUTES_ENUM.NOTES}>
            <Suspense fallback={null}>
                <NoteEditorDialog />
            </Suspense>
            <div className='flex flex-col gap-10 w-full max-w-[600px] mx-auto relative'>
                <NotesHeader />
                <NotesCards key={queryFilter} queryFilter={queryFilter} />
            </div>
        </ModuleWrapper>
    )
}
