import { RdSearchInput } from '@/components-antd-redesign/rd-seearch-input/RdSearchInput'
import { useGoalsStore } from '@/StoreProvider'
import { observer } from 'mobx-react-lite'

export const TopbarSearch: React.FC = observer(() => {
    const { onChangeField, global_filtered_title_value } = useGoalsStore()

    return (
        <RdSearchInput
            value={global_filtered_title_value}
            className='absolute !mx-2 hidden w-[300px] !p-2 font-mono 3xl:flex'
            placeholder='find your goal...'
            onChange={(e) => onChangeField('global_filtered_title_value', e.target.value)}
            size='large'
            allowClear
        />
    )
})
