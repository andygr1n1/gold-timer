import { ModuleWrapper } from '@/components/ModuleWrapper'
import { APP_ROUTES_ENUM } from '@/helpers/enums'
import { observer } from 'mobx-react-lite'
import { ArtifactsCounter } from '../dashboard/components/artifacts-counter/ArtifactsCounter'
import { NotesList } from './components/NotesList'
import { NotesHeader } from './components/NotesHeader'

export const NotesIndex: React.FC = observer(function NotesIndex() {
    return (
        <ModuleWrapper context={APP_ROUTES_ENUM.NOTES} topBarNodes={<ArtifactsCounter />}>
            <div className='mb-5 flex w-full flex-wrap justify-start gap-8'>
                <div className='flex w-full flex-col gap-8'>
                    <NotesHeader />
                    <NotesList />
                </div>
            </div>
        </ModuleWrapper>
    )
})
