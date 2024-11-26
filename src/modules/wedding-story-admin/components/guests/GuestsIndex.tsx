import { useFetchGuestsList } from '../../services/fetch-guests-list/useFetchGuestsList'
import { WeddingGroup } from './components/WeddingGroup'

export const GuestsIndex: React.FC = () => {
    const { data } = useFetchGuestsList()

    return (
        <div className='flex flex-col gap-4 w-full my-2 mx-auto justify-center items-center'>
            {data.map((weddingGroup) => (
                <WeddingGroup key={weddingGroup.id} weddingGroup={weddingGroup} />
            ))}
        </div>
    )
}
