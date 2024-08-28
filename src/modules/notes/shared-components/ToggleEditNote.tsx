import { XTooltip } from '@/components-x/x-tooltip/XTooltip'
import { StyledButton } from '@/components/buttons/StyledButton'
import { IconEdit } from '@/assets/icons/IconEdit'
import { type ReactNode } from 'react'
import { useNoteEditor$ } from '../components/note-editor-dialog/stores/note-editor-store/useNoteEditor.store'
import { editorMode } from '../components/note-editor-dialog/stores/note-editor-store/types'

export const ToggleEditNote: React.FC<{ label?: ReactNode; id: string }> = ({ label, id }) => {
    const { setStore, editMode, store } = useNoteEditor$()

    return (
        <>
            <StyledButton
                id='editNote'
                variant={editMode ? 'contained' : 'text'}
                size={'custom'}
                startIcon={<IconEdit className='h-6 w-6 opacity-70 hover:opacity-100' />}
                onClick={() => {
                    setStore({
                        editorMode: editMode ? editorMode.view : editorMode.edit,
                        open: true,
                        id,
                        metadata: {
                            viewModeRedirect: store.editorMode === editorMode.view ? store.editorMode : undefined,
                        },
                    })
                }}
            >
                {label}
            </StyledButton>
            {!label && <XTooltip anchorSelect='#editNote'>{editMode ? 'Cancel' : 'Edit'}</XTooltip>}
        </>
    )
}
