import { RoundedButton } from '@/components/buttons/RoundedButton'
import { useNotesStore } from '@/StoreProvider'

export const ButtonSaveTask: React.FC<{ disabled: boolean }> = function ButtonSaveTask({ disabled }) {
    const { saveNote: saveTask } = useNotesStore()

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
