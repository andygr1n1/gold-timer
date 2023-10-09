import { ReactNode } from 'react'
import { StyledButton } from '../buttons/StyledButton'
import { Icon } from '@iconify/react'

export const FormFooter: React.FC<{
    disabled?: boolean
    okTitle?: ReactNode
    onOk: (e: React.MouseEvent<HTMLElement, MouseEvent>) => void
    onCancel: () => void
}> = ({ onCancel, onOk, okTitle = 'Ok', disabled = false }) => {
    return (
        <div className='mt-10 flex w-full items-center justify-center gap-6'>
            <StyledButton onClick={onCancel} variant='outlined' size='extraLarge' className='w-28'>
                <div className='flex items-center justify-center gap-2'>
                    <Icon icon='uiw:left-circle' width={17} height={17} />
                    <div>{'Return'}</div>
                </div>
            </StyledButton>
            <StyledButton disabled={disabled} size='extraLarge' className='w-28' onClick={onOk}>
                {okTitle}
            </StyledButton>
        </div>
    )
}
