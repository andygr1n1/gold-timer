import { observer } from 'mobx-react-lite'
import { WeddingGroup } from './components/WeddingGroup'
import { useFetchFilteredGuests } from '../../hooks/useFetchFilteredGuests'
import { useAppSelector } from '@/store/useRootStore'
import { selectTextValue } from '../../services/weddingStoryFiltersSlice'

export const GuestsIndex: React.FC = observer(() => {
    const textValue = useAppSelector(selectTextValue)
    const { filteredData } = useFetchFilteredGuests({ textFilter: textValue })

    return (
        <div className='flex flex-col gap-4 w-full my-2 mx-auto justify-center items-center'>
            {filteredData.map((weddingGroup) => (
                <WeddingGroup key={weddingGroup.id} weddingGroup={weddingGroup} />
            ))}
        </div>
    )
})
