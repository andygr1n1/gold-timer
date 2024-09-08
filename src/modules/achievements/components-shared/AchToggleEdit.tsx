import { XTooltip } from '@/components-x/x-tooltip/XTooltip'
import { StyledButton } from '@/components/buttons/StyledButton'
import { IconEdit } from '@/assets/icons/IconEdit'
import { type ReactNode } from 'react'
import { useAchEditorDialog$ } from '../components/ach-editor-dialog/mst/provider'

export const AchToggleEdit: React.FC<{ label?: ReactNode; id: string; onClose?: () => void }> = ({
    label,
    id,
    onClose,
}) => {
    const { edit_id, onOpenEditMode } = useAchEditorDialog$()

    return (
        <>
            <StyledButton
                id='editAch'
                variant={edit_id ? 'contained' : 'text'}
                size={'custom'}
                startIcon={<IconEdit className='h-6 w-6 opacity-70 hover:opacity-100' />}
                onClick={() => {
                    onOpenEditMode({ edit_id: id })
                    onClose?.()
                }}
            >
                {label}
            </StyledButton>
            {!label && <XTooltip anchorSelect='#editAch'>{edit_id ? 'Cancel' : 'Edit'}</XTooltip>}
        </>
    )
}
