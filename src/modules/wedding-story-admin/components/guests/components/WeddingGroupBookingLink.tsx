import { XMenuItem } from '@/components-x/x-dropdown/XMenuItem'
import { StyledButton } from '@/components/buttons/StyledButton'
import CopyToClipboard from 'react-copy-to-clipboard'
import type { IWeddingGroup } from '@/modules/wedding-story-admin/types'
import { IconCopyLink } from '@/assets/icons/IconCopyLink'
import { notifyClipboard } from '@/helpers/processMessage'

export const WeddingGroupBookingLink: React.FC<{
    weddingGroup: IWeddingGroup
    action: () => void
}> = ({ weddingGroup, action }) => {
    const weddingStoryClient = import.meta.env['VITE_OUR_STORY_URL']
    const url = `${weddingStoryClient}?booking=${weddingGroup.booking_number}`

    return (
        <XMenuItem>
            <CopyToClipboard text={url}>
                <StyledButton
                    variant='text'
                    size='small'
                    onClick={() => {
                        action()
                        notifyClipboard(url)
                    }}
                    startIcon={<IconCopyLink width={22} height={22} />}
                >
                    <span className='flex w-[130px] justify-start capitalize'>Booking Link</span>
                </StyledButton>
            </CopyToClipboard>
        </XMenuItem>
    )
}
