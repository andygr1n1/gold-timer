import { XTooltip } from '@/components-x/x-tooltip/XTooltip'
import { StyledButton } from '@/components/buttons/StyledButton'
import { IconEdit } from '@/assets/icons/IconEdit'
import { ReactNode } from 'react'
import { useAchEditor$ } from './ach-editor-dialog/stores/useAchEditor.store'
import { editorModeEnum } from '@/services/types'

export const AchToggleEdit: React.FC<{ label?: ReactNode; id: string }> = ({ label, id }) => {
    const { setStore, editMode, viewMode, editorMode } = useAchEditor$()

    return (
        <>
            <StyledButton
                id='editAch'
                variant={editMode ? 'contained' : 'text'}
                size={'custom'}
                startIcon={<IconEdit className='h-6 w-6 opacity-70 hover:opacity-100' />}
                onClick={() => {
                    setStore({
                        editorMode: !viewMode ? editorModeEnum.view : editorModeEnum.edit,
                        open: true,
                        id,
                        metadata: {
                            viewModeRedirect: viewMode ? editorMode : undefined,
                        },
                    })
                }}
            >
                {label}
            </StyledButton>
            {!label && <XTooltip anchorSelect='#editAch'>{editMode ? 'Cancel' : 'Edit'}</XTooltip>}
        </>
    )
}
