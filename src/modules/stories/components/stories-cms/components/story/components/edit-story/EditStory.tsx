import { StyledButton } from '@/components/buttons/StyledButton'
import { type ReactNode } from 'react'
import { useEditStory } from './useEditStory'
import { IconEdit } from '@/assets/icons'

export const EditStory: React.FC<{ id: string; label?: ReactNode; onClose: () => void }> = ({ id, label, onClose }) => {
    const { editStory } = useEditStory()

    return (
        <StyledButton
            id='editStory'
            variant={'text'}
            size={'small'}
            onClick={() => {
                editStory({ id })
                onClose()
            }}
            startIcon={<IconEdit className='h-6 w-6 opacity-70 hover:opacity-100' />}
        >
            {label}
        </StyledButton>
    )
}
