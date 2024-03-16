import { IconDeleteTemp } from '@/assets/icons'
import { XTooltip } from '@/components-x/x-tooltip/XTooltip'
import { StyledButton } from '@/components/buttons/StyledButton'
import { INote$ } from '@/modules/notes/mst/types'
import { observer } from 'mobx-react-lite'

export const DeleteNote: React.FC<{ note: INote$ }> = observer(({ note }) => {
    const { deleteNote, deleted_at } = note
    return (
        <>
            <StyledButton
                id='toggleMoveNoteToBin'
                size={'custom'}
                className='h-7 w-10 opacity-70 hover:opacity-100 hover:!text-red-600 md:h-10 md:w-14'
                error={deleted_at ? true : false}
                variant={'text'}
                onClick={deleteNote}
            >
                <IconDeleteTemp width={24} height={24} className='min-h-[24px] min-w-[24px]' />
            </StyledButton>
            <XTooltip anchorSelect='#toggleMoveNoteToBin'>{deleted_at ? 'Restore' : 'Move to bin'}</XTooltip>
        </>
    )
})
