import { XButton } from '@/components-x/x-button/XButton'
import { useTasksStore } from '@/StoreProvider'

export const ButtonSaveTask: React.FC<{ disabled: boolean }> = function ButtonSaveTask({ disabled }) {
    const { saveTask } = useTasksStore()

    return (
        <XButton className='flex w-full items-center justify-center' onClick={saveTask} disabled={disabled}>
            Create Note
        </XButton>
    )
}
