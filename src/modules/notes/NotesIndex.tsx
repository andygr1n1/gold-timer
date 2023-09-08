import { useUserStore } from '@/StoreProvider'
import { ModuleWrapper } from '@/components/ModuleWrapper'
import { APP_ROUTES_ENUM } from '@/helpers/enums'
import { NotesWidget } from '@/modules/notes/NotesWidget'
import { observer } from 'mobx-react-lite'

export const TasksIndex: React.FC = observer(function TasksIndex() {
    const { id: userId } = useUserStore()

    return userId ? (
        <ModuleWrapper context={APP_ROUTES_ENUM.NOTES}>
            <NotesWidget />
        </ModuleWrapper>
    ) : null
})
