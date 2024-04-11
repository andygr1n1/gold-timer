import { observer } from 'mobx-react-lite'
import { useRootStore } from '@/app/StoreProvider'
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
            startIcon={<IconSearch width={24} height={24} />}
            placeholder='Find sprint...'
        />
    )
})
