import { ReactNode } from 'react'
import { StyledButton } from '../buttons/StyledButton'
import { Icon } from '@iconify/react'
import { XTooltip } from '@/components-x/x-tooltip/XTooltip'

export const FormFooter: React.FC<{
    disabled?: boolean
    disabledTooltip?: string
    okTitle?: ReactNode
    onOk: (e: React.MouseEvent<HTMLElement, MouseEvent>) => void
    onCancel: () => void
    hideOkButton?: boolean
}> = ({ onCancel, onOk, okTitle = 'Ok', disabled = false, disabledTooltip, hideOkButton = false }) => {
    return (
        <div className='mt-10 flex w-full items-center justify-center gap-6'>
            <StyledButton rounded onClick={onCancel} variant='outlined' size='extraLarge' className='w-28'>
                <div className='flex items-center justify-center gap-2'>
                    <Icon icon='uiw:left-circle' width={17} height={17} />
                    <div>{'Return'}</div>
                </div>
            </StyledButton>
            {hideOkButton ? null : (
                <div className='relative'>
                    <StyledButton rounded disabled={disabled} size='extraLarge' className='z-10 w-28' onClick={onOk}>
                        {okTitle}
                    </StyledButton>
                    {disabled && disabledTooltip && (
                        <div
                            id='disabledTooltip'
                            className='pointer-events-auto absolute left-0 top-0 z-20 h-full w-full rounded-lg bg-transparent
                        '
                        />
                    )}
                    {disabled && disabledTooltip && (
                        <XTooltip anchorSelect='#disabledTooltip'>{disabledTooltip}</XTooltip>
                    )}
                </div>
            )}
        </div>
    )
}
