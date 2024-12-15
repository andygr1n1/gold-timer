import { observer } from 'mobx-react-lite'
import { useFetchGuestsList } from '../../services/fetch-guests-list/useFetchGuestsList'
import { WeddingGroup } from './components/WeddingGroup'
import { useGuestsFilters$ } from '../../mst/guestsFilters.provider'

export const GuestsIndex: React.FC = observer(() => {
    const { textValue } = useGuestsFilters$()
    const { filteredData } = useFetchGuestsList({ textFilter: textValue })

    return (
        <div className='flex flex-col gap-4 w-full my-2 mx-auto justify-center items-center'>
            {filteredData.map((weddingGroup) => (
                <WeddingGroup key={weddingGroup.id} weddingGroup={weddingGroup} />
            ))}
        </div>
    )
})
