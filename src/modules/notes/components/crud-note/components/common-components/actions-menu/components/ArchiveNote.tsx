import { IconArchive } from '@/assets/icons/IconArchive'
import { XTooltip } from '@/components-x/x-tooltip/XTooltip'
import { StyledButton } from '@/components/buttons/StyledButton'
import { cn } from '@/functions'
import { INote$ } from '@/modules/notes/mst/types'
import { observer } from 'mobx-react-lite'

export const ArchiveNote: React.FC<{ note: INote$ }> = observer(({ note }) => {
    const { archiveNote, archived } = note
    return (
        <>
            <StyledButton
                id='toggleMoveNoteToBin'
                size={'custom'}
                className={cn(
                    'h-7 w-10 opacity-70 hover:opacity-100 hover:!text-amber-500 md:h-10 md:w-14',
                    archived && '!text-amber-500',
                )}
                variant={'text'}
                onClick={archiveNote}
            >
                <IconArchive width={24} height={24} className='min-h-[24px] min-w-[24px]' />
            </StyledButton>
            <XTooltip anchorSelect='#toggleMoveNoteToBin'>{archived ? 'Unarchive' : 'Archive'}</XTooltip>
        </>
    )
})
