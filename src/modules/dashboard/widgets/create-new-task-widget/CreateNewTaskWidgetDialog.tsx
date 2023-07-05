import { useTasksStore } from '@/StoreProvider'
import { XModal } from '@/components-x/x-modal/XModal'
import { observer } from 'mobx-react-lite'
import { CreateNewNote } from './components/CreateNewNote'

export const CreateNewTaskWidgetDialog: React.FC = observer(() => {
    const { new_task_dialog, onChangeField } = useTasksStore()

    const onCancel = () => onChangeField('new_task_dialog', false)

    return (
        <XModal title={'Create Note'} open={new_task_dialog} onCancel={onCancel}>
            <CreateNewNote />
        </XModal>
    )
})
