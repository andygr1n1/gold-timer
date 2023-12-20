import { observer } from 'mobx-react-lite'
import { XModal } from '@/components-x/x-modal/XModal'
import { useGoalsStore } from '@/StoreProvider'
import { cast } from 'mobx-state-tree'
import { TopGoal } from '../TopGoal'
import { XInput } from '@/components-x/x-input/XInput'
import { useFilterWidgetGoals } from './useFilterWidgetGoals'
import { FormLabel } from '@/components/form/FormLabel'

export const SelectedWidgetGoalsView: React.FC = observer(function CRUD_GoalDialog() {
    const { onChangeField, selected_widget_goals } = useGoalsStore()

    const isOpen = selected_widget_goals.length

    const onCancel = () => {
        onChangeField('selected_widget_goals', cast([]))
    }

    const { filterValue, setFilterValue, goalsFilter } = useFilterWidgetGoals()

    return (
        <XModal open={!!isOpen} onCancel={onCancel} fullHeight>
            <FormLabel title='Search:' />
            <XInput
                autoFocus={false}
                value={filterValue}
                onChange={(e) => setFilterValue(e.target.value)}
                className='w-full'
            />
            <div tabIndex={0} className=' my-10 flex flex-col gap-4'>
                {goalsFilter(selected_widget_goals).map((goal) => (
                    <TopGoal key={goal.id} goal={goal} className='min-h-[60px] !w-full !flex-[100%]' />
                ))}
            </div>
        </XModal>
    )
})
