import { useUserStore } from '@/StoreProvider'
import { ModuleWrapper } from '@/components-layout/ModuleWrapper'
import { NotesWidget } from '@/modules/notes/NotesWidget'
import { observer } from 'mobx-react-lite'

export const TasksIndex: React.FC = observer(function TasksIndex() {
    const { id: userId } = useUserStore()

    return userId ? (
        <ModuleWrapper title={'Notes'}>
            <NotesWidget />
        </ModuleWrapper>
    ) : null
})
