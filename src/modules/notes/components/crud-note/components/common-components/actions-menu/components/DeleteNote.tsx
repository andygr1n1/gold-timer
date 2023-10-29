import { XTooltip } from '@/components-x/x-tooltip/XTooltip'
import { StyledButton } from '@/components/buttons/StyledButton'
import { INote$ } from '@/modules/notes/mst/types'
import { Icon } from '@iconify/react'
import { observer } from 'mobx-react-lite'

export const DeleteNote: React.FC<{ note: INote$ }> = observer(({ note }) => {
    const { deleteNote, deleted_at } = note
    return (
        <>
            <StyledButton
                id='toggleMoveNoteToBin'
                size={'custom'}
                className='h-7 w-10 opacity-70 hover:opacity-100 md:h-10 md:w-14'
                error
                variant={deleted_at ? 'contained' : 'outlined'}
                onClick={deleteNote}
            >
                <Icon icon='fluent:delete-dismiss-24-filled' width={24} height={24} />
            </StyledButton>
            <XTooltip anchorSelect='#toggleMoveNoteToBin'>{deleted_at ? 'Restore from bin' : 'Move to bin'}</XTooltip>
        </>
    )
})
