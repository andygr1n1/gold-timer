import { observer } from 'mobx-react-lite'
import { XInput } from '@/components-x/x-input/XInput'
import { IconSearch } from '@/assets/icons/IconSearch'
import { useEffect } from 'react'
import { useGoalsFilters } from '../stores/useGoalsFilters.store'

export const SearchGoalsInput: React.FC = observer(() => {
    const { store, onChange, onChangeServerSearchInput } = useGoalsFilters()
    // const [_filterGoalAtom_search, _setFilterGoalAtom_search] = useAtom(filterGoalAtom_search)
    // const [bufferValue, setBufferValue] = useState(_filterGoalAtom_search)
    // const location = useLocation()
    // const state: IGoalQueryTypeFilter = location.state?.filter

    // const onChangeValue = useMemo(() => {
    //     return debounce((e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    //         _setFilterGoalAtom_search(e.target.value)
    //         window.queryClient?.invalidateQueries({ queryKey: ['KEY_FetchGoalsByFilter', state] })
    //     }, 1000)
    // }, [])

    useEffect(() => {
        return () => {
            onChangeServerSearchInput.cancel()
        }
    }, [])

    return (
        <XInput
            type='text'
            autoFocus={false}
            value={store.searchInput}
            onChange={onChange}
            startIcon={<IconSearch width={24} height={24} />}
            placeholder='Find me...'
            width='!max-w-[600px] !w-full'
        />
    )
})
