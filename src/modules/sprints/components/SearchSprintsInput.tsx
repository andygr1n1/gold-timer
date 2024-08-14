import { observer } from 'mobx-react-lite'
import { useRootStore } from '@/modules/app/mst/StoreProvider'
import { XInput } from '@/components-x/x-input/XInput'
import { IconSearch } from '@/assets/icons/IconSearch'

export const SearchSprintsInput: React.FC = observer(() => {
    const {
        sprints$: {
            sprints_filter$: { sprints_input_filter, onChangeField },
        },
    } = useRootStore()

    return (
        <XInput
            value={sprints_input_filter}
            onChange={(e) => onChangeField('sprints_input_filter', e.target.value)}
            startIcon={<IconSearch className='text-slate-500/50' width={20} height={20} />}
            placeholder='Find sprint...'
        />
    )
})
