import { RdModal } from '@/components-antd-redesign/antrd-modal/AntrdModal'
import { TasksWidget } from '@/widgets/tasks/tasks-widget/TasksWidget'
import { action, observable } from 'mobx'
import { observer } from 'mobx-react-lite'

interface IBaseState {
    is_open: boolean
}

export const tasksModalState: IBaseState = observable({ is_open: false })
export const toggleTasksModalVisibility = action(() => {
    tasksModalState.is_open = !tasksModalState.is_open
})

export const TasksModal: React.FC = observer(() => {
    return (
        <RdModal
            title={'Tasks'}
            open={tasksModalState.is_open}
            footer={null}
            onOk={toggleTasksModalVisibility}
            onCancel={toggleTasksModalVisibility}
            width={'70vw'}
            // destroyOnClose={true}
        >
            <TasksWidget />
        </RdModal>
    )
})
