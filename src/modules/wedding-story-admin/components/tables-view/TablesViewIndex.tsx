import { useFetchAllGuests } from '../../hooks/useFetchAllGuests'
import { TableList } from './components/TableList'

export const TablesViewIndex: React.FC = () => {
    const { groups, guests, tables } = useFetchAllGuests()
    console.log(groups, guests, tables)
    return (
        <div className='flex flex-wrap gap-2 w-full'>
            <TableList table={0} fullWidth weddingStars />
            {tables.map((table) => (
                <TableList key={table} table={table} />
            ))}
        </div>
    )
}
