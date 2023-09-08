import { RoundedButton } from '@/components/buttons/RoundedButton'
import { useTasksStore } from '@/StoreProvider'

export const ButtonSaveTask: React.FC<{ disabled: boolean }> = function ButtonSaveTask({ disabled }) {
    const { saveTask } = useTasksStore()

    return (
        <RoundedButton
            className='flex w-full items-center justify-center'
            onClick={saveTask}
            disabled={disabled}
            minh={'min-h-[50px]'}
            rounded={'rounded-[15px]'}
        >
            Add Note
        </RoundedButton>
    )
}
