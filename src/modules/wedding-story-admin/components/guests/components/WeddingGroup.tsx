import { XMenuDivider } from '@/components-x/x-dropdown/XMenuDivider'
import { StyledButton } from '@/components/buttons/StyledButton'
import { FormLabel } from '@/components/form/FormLabel'
import { cn } from '@/helpers/cn'
import type { IWeddingGroup } from '@/modules/wedding-story-admin/types'
import { WeddingGuestInfo } from './WeddingGuestInfo'
import { Checkbox } from 'antd'
import { IconCopyLink } from '@/assets/icons/IconCopyLink'
import { notifyClipboard } from '@/helpers/processMessage'
import { CopyToClipboard } from 'react-copy-to-clipboard'

export const WeddingGroup: React.FC<{ weddingGroup: IWeddingGroup }> = ({ weddingGroup }) => {
    const weddingStoryClient = import.meta.env['VITE_OUR_STORY_URL']
    let url = `${weddingStoryClient}?registration=${weddingGroup.id}`

    if (weddingGroup.registration) {
        url = `${weddingStoryClient}?booking=${weddingGroup.booking_number}`
    }

    return (
        <div
            className={cn(
                `bg-global-2-bg flex w-[calc(100%-40px)] flex-col gap-5
                    overflow-auto rounded-lg p-5 duration-300 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]`,
                weddingGroup.registration ? 'opacity-100' : 'opacity-50 hover:opacity-100',
            )}
        >
            <div className='flex gap-4 w-full  justify-between '>
                <div className='flex gap-2'>
                    <div className='pointer-events-none'>
                        <Checkbox checked={!!weddingGroup.registration} />
                    </div>
                    <div>
                        <FormLabel title='Group' />
                        <span>{weddingGroup.name}</span>
                    </div>
                </div>
                <div className='flex gap-4 items-center'>
                    <CopyToClipboard text={url}>
                        <StyledButton
                            variant='outlined'
                            size='small'
                            startIcon={<IconCopyLink className='w-5 h-5' />}
                            onClick={() => {
                                notifyClipboard(`${url}`)
                            }}
                        />
                    </CopyToClipboard>
                </div>
            </div>
            <XMenuDivider />
            <div className='flex flex-wrap justify-between gap-10 md:gap-2'>
                {weddingGroup.wedding_guests.map((weddingGuest) => (
                    <WeddingGuestInfo
                        key={weddingGuest.id}
                        weddingGuest={weddingGuest}
                        registered={!!weddingGroup.registration}
                    />
                ))}
            </div>
        </div>
    )
}
