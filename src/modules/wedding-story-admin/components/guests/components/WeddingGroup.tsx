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
import { WeddingGroupActions } from './WeddingGroupActions'
import { IconArchive } from '@/assets/icons/IconArchive'

export const WeddingGroup: React.FC<{ weddingGroup: IWeddingGroup }> = ({ weddingGroup }) => {
    const weddingStoryClient = import.meta.env['VITE_OUR_STORY_URL']
    let url = `${weddingStoryClient}?registration=${weddingGroup.id}`

    if (weddingGroup.registration) {
        url = `${weddingStoryClient}?booking=${weddingGroup.booking_number}`
    }

    return (
        <div
            className={cn(
                `relative bg-global-2-bg flex w-[calc(100%-40px)] flex-col gap-5
                    overflow-auto rounded-lg p-5 duration-300 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]`,
                weddingGroup.registration ? 'opacity-100' : 'opacity-50 hover:opacity-100',
            )}
        >
            <div className='flex gap-4 w-full  justify-between '>
                <div className='flex gap-2'>
                    <div className='pointer-events-none'>
                        <Checkbox rootClassName='gray-checkbox' checked={!!weddingGroup.registration} />
                    </div>
                    <div>
                        <div className='flex gap-2'>
                            <FormLabel title='Group' />
                            <FormLabel
                                uppercase
                                title={
                                    !!weddingGroup.registration && weddingGroup.booking_number
                                        ? weddingGroup.booking_number
                                        : ''
                                }
                            />
                        </div>
                        <span>{weddingGroup.name}</span>
                    </div>
                </div>
                <div className='flex items-center'>
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
                    <WeddingGroupActions weddingGroup={weddingGroup} />
                </div>
            </div>
            <XMenuDivider />
            <div className='flex flex-wrap items-start justify-between gap-10 md:gap-2'>
                {weddingGroup.wedding_guests.map((weddingGuest) => (
                    <WeddingGuestInfo
                        key={weddingGuest.id}
                        weddingGuest={weddingGuest}
                        registered={!!weddingGroup.registration}
                    />
                ))}
            </div>
            <div className='flex justify-end'>
                {weddingGroup.hide && (
                    <StyledButton
                        disabled
                        variant='text'
                        className='mx-4 text-sm'
                        startIcon={<IconArchive width={18} height={18} />}
                    >
                        Hidden
                    </StyledButton>
                )}
            </div>
        </div>
    )
}
