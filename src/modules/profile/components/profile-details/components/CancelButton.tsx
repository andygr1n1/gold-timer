import { StyledButton } from '@/components/buttons/StyledButton'
import { useProfile$ } from '@/modules/profile/stores/useProfile.store'

export const CancelButton = () => {
    const { onCancel } = useProfile$()
    return (
        <StyledButton onClick={onCancel} size='small' error variant={'outlined'}>
            Cancel
        </StyledButton>
    )
}
