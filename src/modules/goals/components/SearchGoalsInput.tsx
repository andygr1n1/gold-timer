import { observer } from 'mobx-react-lite'
import { Icon } from '@iconify/react'
import { useGoalsStore } from '@/StoreProvider'
import { XInput } from '@/components-x/x-input/XInput'

export const SearchGoalsInput: React.FC = observer(() => {
    const {
        goals_filter$: { goals_input_filter, onChangeField },
    } = useGoalsStore()

    return (
        <XInput
            className='dynamic-filter'
            value={goals_input_filter}
            onChange={(e) => onChangeField('goals_input_filter', e.target.value)}
            startIcon={<Icon icon='line-md:search' width={24} height={24} />}
            placeholder='Find me...'
        />
    )
})
