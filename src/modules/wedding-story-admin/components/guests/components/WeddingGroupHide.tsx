import { IconArchive } from '@/assets/icons/IconArchive'
import { XMenuItem } from '@/components-x/x-dropdown/XMenuItem'
import { StyledButton } from '@/components/buttons/StyledButton'
import { useHideWeddingGroup } from '@/modules/wedding-story-admin/hooks/useHideWeddingGroup'
import type { IWeddingGroup } from '@/modules/wedding-story-admin/services/types'

export const WeddingGroupHide: React.FC<{ weddingGroup: IWeddingGroup; action: () => void }> = ({
    weddingGroup,
    action,
}) => {
    const { toggleHideGroup } = useHideWeddingGroup()

    return (
        <XMenuItem>
            <StyledButton
                variant='text'
                size='small'
                onClick={() => {
                    toggleHideGroup({ weddingGroup })
                    action()
                }}
                startIcon={<IconArchive width={20} height={20} />}
            >
                <span className='flex w-[130px] justify-start capitalize'>{weddingGroup.hide ? 'Unhide' : 'Hide'}</span>
            </StyledButton>
        </XMenuItem>
    )
}
