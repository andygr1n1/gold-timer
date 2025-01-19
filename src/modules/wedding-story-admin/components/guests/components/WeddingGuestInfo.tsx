import { IconEmail } from '@/assets/icons/IconEmail'
import { IconExpired } from '@/assets/icons/IconExpired'
import { IconPersonRound } from '@/assets/icons/IconPersonRound'
import { IconPhone } from '@/assets/icons/IconPhone'
import { IconPlaceSetting } from '@/assets/icons/IconPlaceSetting'
import { FormLabel } from '@/components/form/FormLabel'
import { cn } from '@/helpers/cn'
import { notifyClipboard } from '@/helpers/processMessage'
import type { IWeddingGuest } from '@/modules/wedding-story-admin/services/types'
import { isWithinInterval, subWeeks } from 'date-fns'
import CopyToClipboard from 'react-copy-to-clipboard'

export const WeddingGuestInfo: React.FC<{ weddingGuest: IWeddingGuest; registered: boolean }> = ({
    weddingGuest,
    registered,
}) => {
    /* 4 weeks before the wedding */
    const checkInIsActive = (() => {
        const today = new Date()
        const weddingDate = new Date('2025-05-02')
        const startDate = subWeeks(weddingDate, 4)
        return isWithinInterval(today, { start: startDate, end: weddingDate })
    })()

    return (
        <div className='flex gap-2 items-center md:flex-[45%] md:max-w-[50%] flex-wrap text-base'>
            <CopyToClipboard text={`${weddingGuest.first_name} ${weddingGuest.last_name || ''}`}>
                <div
                    className='flex gap-2 items-center w-full group hover:text-blue-500 cursor-pointer duration-300'
                    onClick={() => {
                        notifyClipboard(`${weddingGuest.first_name} ${weddingGuest.last_name || ''}`)
                    }}
                >
                    <IconPersonRound className='w-5 h-5 text-cText opacity-70 duration-300 group-hover:text-blue-500 group-hover:opacity-100' />
                    <span>{weddingGuest.first_name}</span>
                    {weddingGuest.last_name && <span>{weddingGuest.last_name}</span>}
                </div>
            </CopyToClipboard>

            {weddingGuest.email && (
                <CopyToClipboard text={weddingGuest.email}>
                    <div
                        className='flex gap-2 w-full group hover:text-blue-500 cursor-pointer duration-300'
                        onClick={() => {
                            notifyClipboard(weddingGuest.email)
                        }}
                    >
                        <IconEmail className='w-5 h-5 text-cText opacity-70' />
                        <span>{weddingGuest.email}</span>
                    </div>
                </CopyToClipboard>
            )}
            {weddingGuest.phone && (
                <CopyToClipboard text={weddingGuest.phone}>
                    <div
                        className='flex gap-2 w-full group hover:text-blue-500 cursor-pointer duration-300'
                        onClick={() => {
                            notifyClipboard(weddingGuest.phone)
                        }}
                    >
                        <IconPhone className='w-5 h-5 text-cText opacity-70' />
                        <span>{weddingGuest.phone}</span>
                    </div>
                </CopyToClipboard>
            )}
            {!!weddingGuest.more_info && (
                <CopyToClipboard text={weddingGuest.more_info}>
                    <div
                        className='flex gap-2 w-full group hover:text-blue-500 cursor-pointer duration-300'
                        onClick={() => {
                            notifyClipboard(weddingGuest.more_info)
                        }}
                    >
                        <IconExpired className='w-5 h-5 min-w-5 min-h-5 text-cText opacity-70' />
                        <span>{weddingGuest.more_info}</span>
                    </div>
                </CopyToClipboard>
            )}
            {!!registered && checkInIsActive && (
                <div className='flex gap-2 w-full'>
                    <FormLabel title='Invitation status' />
                    <span className={cn('font-bold', weddingGuest.accepted && 'text-green-500')}>
                        {weddingGuest.accepted ? 'Accepted' : 'Not accepted'}
                    </span>
                </div>
            )}
            {!!weddingGuest.table && (
                <div className='flex gap-2 w-full'>
                    <IconPlaceSetting className='w-5 h-5 text-cText opacity-70' />
                    <span>{weddingGuest.table}</span>
                </div>
            )}
        </div>
    )
}
