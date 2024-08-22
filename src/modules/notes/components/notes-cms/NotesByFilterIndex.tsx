import { ModuleWrapper } from '@/components/ModuleWrapper'
import { useLocation } from 'react-router-dom'
import { NotesHeader } from './components/notes-header/NotesHeader'
import { Suspense } from 'react'
import NoteEditorDialog from '../note-editor-dialog/NoteEditorDialog'
import { NotesList } from './components/NotesCards'
import { INoteStatus } from '../../shared-services/types'
import { Notes$Provider, notes$ } from './mst/provider'

export const NotesByFilterIndex: React.FC = () => {
    const location = useLocation()
    const queryFilter: INoteStatus = location.state?.filter

    return (
        <ModuleWrapper>
            <Suspense fallback={null}>
                <NoteEditorDialog />
            </Suspense>
            <Notes$Provider store={notes$}>
                <div className='flex flex-col gap-10 w-full max-w-[600px] mx-auto relative'>
                    <NotesHeader />
                    <NotesList key={queryFilter} queryFilter={queryFilter} />
                </div>
            </Notes$Provider>
        </ModuleWrapper>
    )
}
