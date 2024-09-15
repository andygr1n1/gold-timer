import { StyledButton } from '@/components/buttons/StyledButton'
import { useAchEditorDialog$ } from '../components/ach-editor-dialog/mst/provider'
import { cn } from '@/helpers/cn'
import { IconEye } from '@/assets/icons'

export const AchView: React.FC<{ id: string; onClose?: () => void; context?: 'drawer' }> = ({
    id,
    onClose,
    context,
}) => {
    const { edit_id, onOpenViewMode } = useAchEditorDialog$()

    return (
        <>
            <StyledButton
                className={cn(context === 'drawer' && '!w-full !py-5 !h-0')}
                id='editAch'
                variant={edit_id ? 'contained' : 'text'}
                size={'custom'}
                startIcon={<IconEye className='h-6 w-6 min-h-6 min-w-6 opacity-70 hover:opacity-100' />}
                onClick={() => {
                    onOpenViewMode({ edit_id: id })
                    onClose?.()
                }}
            >
                <span className='capitalize w-full justify-start flex'>View</span>
            </StyledButton>
        </>
    )
}
