import { useFetchAllGuests } from '@/modules/wedding-story-admin/hooks/useFetchAllGuests'
import styles from '../TablesView.module.scss'
import { TableGuest } from './TableGuest'
import { cn } from '@/helpers/cn'

export const TableList: React.FC<{ table: number; fullWidth?: boolean; weddingStars?: boolean }> = ({
    table,
    fullWidth,
    weddingStars,
}) => {
    const { guests } = useFetchAllGuests()

    const tableGuests = guests.filter((guest) => guest.table === table)

    return (
        <div
            className={cn(
                styles['dashboardWidgetWrapper'],
                fullWidth && 'w-full flex-[100%] 2lg:!flex-[100%]',
                weddingStars && 'border-solid border-amber-500 !bg-amber-500/10',
            )}
        >
            <div className='flex flex-col gap-2 p-4'>
                <div className='text-lg font-bold flex mb-4 gap-2'>
                    {table ? (
                        <div className='opacity-70 font-kzen gap-2 flex'>
                            <span>Table</span>
                            <span>
                                {table} ( {tableGuests.length} )
                            </span>
                        </div>
                    ) : (
                        <span className='text-amber-500 font-kzen'>Wedding Stars</span>
                    )}
                </div>
                <div className='flex flex-col gap-2'>
                    {tableGuests.map((guest) => (
                        <TableGuest key={guest.id} guest={guest} />
                    ))}
                </div>
            </div>
        </div>
    )
}
