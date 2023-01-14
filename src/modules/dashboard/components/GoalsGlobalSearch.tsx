import { RdSearchInput } from '@/components/rd/rd-seearch-input/RdSearchInput'
import { CreateNewGoalIcon } from '@/components/create-new-goal/CreateNewGoalIcon'
import { useGoalsStore } from '@/StoreProvider'
import { observer } from 'mobx-react-lite'
import { DashboardFilter } from './DashboardFilter'

export const GoalsGlobalSearch: React.FC = observer(() => {
    const { onChangeField, global_filtered_title_value } = useGoalsStore()
    return (
        <div className='my-10 flex items-center justify-center gap-3'>
            <CreateNewGoalIcon />
            <RdSearchInput
                value={global_filtered_title_value}
                className='w-[300px] font-mono md:w-[400px]'
                placeholder='find your goal...'
                onChange={(e) => onChangeField('global_filtered_title_value', e.target.value)}
                size='large'
                allowClear
            />
            <DashboardFilter />
        </div>
    )
})
