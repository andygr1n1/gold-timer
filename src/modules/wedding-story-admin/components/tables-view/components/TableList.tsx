import { useFetchAllGuests } from '@/modules/wedding-story-admin/hooks/useFetchAllGuests'
import styles from '../TablesView.module.scss'
import { TableGuest } from './TableGuest'
import { cn } from '@/helpers/cn'

export const TableList: React.FC<{ table: number | null }> = ({ table }) => {
    const { guests, groups } = useFetchAllGuests()

    const tableGuests = guests.filter((guest) => guest.table === table)

    const starTableGuests = table === 0
    const nullTable = table === null
    const baseTable = !starTableGuests && !nullTable

    return (
        <div
            className={cn(
                styles['dashboardWidgetWrapper'],
                starTableGuests && 'w-full flex-[100%] 2lg:!flex-[100%] 2lg:!max-w-[90%]',
                starTableGuests && 'border-solid border-amber-500 !bg-amber-500/10',
            )}
        >
            <div className='flex flex-col gap-2 p-4'>
                <div className='text-lg font-bold flex mb-4 gap-2'>
                    {baseTable ? (
                        <div className='opacity-70 font-kzen gap-2 flex'>
                            <span>Table</span>
                            <span>
                                {table} ( {tableGuests.length} )
                            </span>
                        </div>
                    ) : starTableGuests ? (
                        <span className='text-amber-500 font-kzen'>Wedding Stars</span>
                    ) : (
                        <span className='text-rose-500 font-kzen'>No Table</span>
                    )}
                </div>
                <div className='flex flex-col gap-2'>
                    {tableGuests.map((guest) => (
                        <TableGuest
                            key={guest.id}
                            guest={guest}
                            group={groups.find((group) => group.wedding_guests.some((g) => g.id === guest.id))!}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}
