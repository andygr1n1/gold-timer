import { useGoalsStore } from '@/StoreProvider'
import { observer } from 'mobx-react-lite'
import { RdSearchInput } from '../rd/rd-seearch-input/RdSearchInput'

export const TopbarSearch: React.FC = observer(() => {
    const { onChangeField, global_filtered_title_value } = useGoalsStore()

    return (
        <RdSearchInput
            value={global_filtered_title_value}
            className='w-[200px] font-mono'
            placeholder='find your goal...'
            onChange={(e) => onChangeField('global_filtered_title_value', e.target.value)}
            size='large'
            allowClear
        />
    )
})
