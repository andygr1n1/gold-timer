import { StyledButton } from '../buttons/StyledButton'

export const FormFooter: React.FC<{
    disabled?: boolean
    okTitle?: string
    onOk: (e: React.MouseEvent<HTMLElement, MouseEvent>) => void
    onCancel: () => void
}> = ({ onCancel, onOk, okTitle = 'Ok', disabled = false }) => {
    return (
        <div className='mt-10 flex w-full items-center justify-center gap-6'>
            <StyledButton onClick={onCancel} variant='outlined' size='extraLarge' className='w-28' error>
                Cancel
            </StyledButton>
            <StyledButton disabled={disabled} size='extraLarge' className='w-28' onClick={onOk}>
                {okTitle}
            </StyledButton>
        </div>
    )
}
