import { useNotesStore } from '@/StoreProvider'
import { XTooltip } from '@/components-x/x-tooltip/XTooltip'
import { StyledButton } from '@/components/buttons/StyledButton'
import { INote$ } from '@/modules/notes/mst/types'
import { Icon } from '@iconify/react'
import { observer } from 'mobx-react-lite'

export const ToggleEditNote: React.FC<{ note: INote$ }> = observer(({ note }) => {
    const { openNoteEditMode, openNoteViewMode, edit_note } = useNotesStore()
    const { id } = note
    return (
        <>
            <StyledButton
                id='editGoal'
                variant={!!edit_note ? 'contained' : 'outlined'}
                size={'custom'}
                className='h-7 w-10  opacity-70 hover:opacity-100 md:h-10 md:w-14'
                startIcon={<Icon icon='material-symbols:edit' width={24} height={24} />}
                onClick={() => (!!edit_note ? openNoteViewMode(id) : openNoteEditMode(id, true))}
            />
            <XTooltip anchorSelect='#editGoal'>{!!edit_note ? 'Cancel edit' : 'Edit goal'}</XTooltip>
        </>
    )
})
