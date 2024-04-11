import { useNotesStore } from '@/app/StoreProvider'
import { IconEdit } from '@/assets/icons'
import { XTooltip } from '@/components-x/x-tooltip/XTooltip'
import { StyledButton } from '@/components/buttons/StyledButton'
import { cn } from '@/functions'
import { INote$ } from '@/modules/notes/mst/types'
import { observer } from 'mobx-react-lite'

export const ToggleEditNote: React.FC<{ note: INote$ }> = observer(({ note }) => {
    const { openNoteEditMode, openNoteViewMode, edit_note } = useNotesStore()
    const { id } = note
    return (
        <>
            <StyledButton
                id='editGoal'
                variant={'text'}
                size={'custom'}
                className={cn(
                    'h-7 w-10  opacity-70 hover:opacity-100 md:h-10 md:w-14',
                    !!edit_note && '!text-blue-500',
                )}
                startIcon={<IconEdit width={24} height={24} className='min-h-[24px] min-w-[24px]' />}
                onClick={() => (!!edit_note ? openNoteViewMode(id) : openNoteEditMode(id, true))}
            />
            <XTooltip anchorSelect='#editGoal'>{!!edit_note ? 'Cancel edit' : 'Edit goal'}</XTooltip>
        </>
    )
})
