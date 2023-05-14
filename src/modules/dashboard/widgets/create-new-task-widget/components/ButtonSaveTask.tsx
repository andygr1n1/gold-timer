import { XButton } from '@/components-x/x-button/XButton'
import { useTasksStore } from '@/StoreProvider'
import { observer } from 'mobx-react-lite'

export const ButtonSaveTask: React.FC = observer(() => {
    const {
        saveTask,
        new_task$: { description },
    } = useTasksStore()

    return (
        <XButton className='flex w-full items-center justify-center' onClick={saveTask} disabled={!description}>
            Create Task
        </XButton>
    )
})
