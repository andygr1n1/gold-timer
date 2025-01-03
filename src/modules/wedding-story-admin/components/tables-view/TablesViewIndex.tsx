import { cn } from '@/helpers/cn'
import { useFetchAllGuests } from '../../hooks/useFetchAllGuests'
import { TableList } from './components/TableList'
import styles from './TablesView.module.scss'
export const TablesViewIndex = () => {
    const { tables } = useFetchAllGuests()

    return (
        <div className='flex flex-wrap justify-center gap-2 w-full'>
            {tables.map((table) => (
                <TableList key={table} table={table} />
            ))}
            <div className={cn(styles['dashboardWidgetWrapper'], 'opacity-0')} />
        </div>
    )
}
