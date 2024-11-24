import { IconPeople } from '@/assets/icons/IconPeople'
import { useFetchGuestsList } from '../../services/fetch-guests-list/useFetchGuestsList'
import { IconPeopleRegistered } from '@/assets/icons/IconPeopleRegistered'
import { IconPeopleAccepted } from '@/assets/icons/IconPeopleAccepted'
import Tippy from '@tippyjs/react'
import clsx from 'clsx'

export const GuestsCounter: React.FC = () => {
    const { totalGuests, totalRegisteredGuests, totalCheckedInGuests } = useFetchGuestsList()
    return (
        <div className='flex items-center gap-2'>
            <Tippy content='Total guests' interactive={true} className=''>
                <div className='flex items-center cursor-default gap-2 border-r-solid  border-slate-300 pr-4 border-opacity-30'>
                    <IconPeople className='w-5 h-5' />
                    <span>{totalGuests}</span>
                </div>
            </Tippy>
            <Tippy content='Registered guests' interactive={true} className=''>
                <div
                    className={clsx(
                        'flex items-center cursor-default gap-2 pr-4',
                        !!totalCheckedInGuests && 'border-r-solid border-slate-300 border-opacity-30',
                    )}
                >
                    <IconPeopleRegistered className='w-5 h-5 ' />
                    <span>{totalRegisteredGuests}</span>
                </div>
            </Tippy>

            {!!totalCheckedInGuests && (
                <Tippy content='Checked in guests' interactive={true} className=''>
                    <div className='flex items-center gap-2 cursor-default'>
                        <IconPeopleAccepted className='w-5 h-5' />
                        <span>{totalCheckedInGuests}</span>
                    </div>
                </Tippy>
            )}
        </div>
    )
}
