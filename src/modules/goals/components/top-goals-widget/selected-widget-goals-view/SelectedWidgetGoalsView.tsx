import { observer } from 'mobx-react-lite'
import { XModal } from '@/components-x/x-modal/XModal'
import { useGoalsStore } from '@/StoreProvider'
import { cast } from 'mobx-state-tree'
import { TopGoal } from '../TopGoal'
import { XInput } from '@/components-x/x-input/XInput'
import { useFilterWidgetGoals } from './useFilterWidgetGoals'
import { FormLabel } from '@/components/form/FormLabel'
import React from 'react'
import { getMonthNumber } from '@/helpers/getMonthNumber.helper'

export const SelectedWidgetGoalsView: React.FC = observer(function CRUD_GoalDialog() {
    const { onChangeField, selected_widget_goals, selected_goal, new_goal, edit_goal } = useGoalsStore()

    const isOpen = selected_widget_goals.length

    const onCancel = () => {
        const goalIsOpen = new_goal || edit_goal || selected_goal
        console.log('goalIsOpen', goalIsOpen)
        !goalIsOpen && onChangeField('selected_widget_goals', cast([]))
    }

    const { filterValue, setFilterValue, goalsFilter } = useFilterWidgetGoals()

    const { filteredGoals, timePoints } = goalsFilter(selected_widget_goals)

    timePoints.map((t) => console.log(t?.split(' ')))

    return (
        <XModal
            open={!!isOpen}
            onCancel={onCancel}
            fullHeight
            onKeyDown={(e) => {
                e?.preventDefault()
                e?.stopPropagation()
            }}
        >
            <FormLabel title='Search:' />
            <XInput
                autoFocus={false}
                value={filterValue}
                onChange={(e) => setFilterValue(e.target.value)}
                className='w-full'
            />
            <div tabIndex={0} className=' my-10 flex flex-col gap-4'>
                {timePoints.map((tp) => (
                    <React.Fragment key={tp}>
                        <div>{tp && <FormLabel title={tp} />}</div>
                        {tp && (
                            <img
                                title={tp}
                                src={`${import.meta.env.VITE_FIRE_BUNNY_STORAGE}/utility/seasons/${getMonthNumber(
                                    tp.split(' ')[1],
                                )}.png`}
                                className='rounded-xs h-32 w-full'
                            />
                        )}
                        <div className='flex flex-col gap-5'>
                            {filteredGoals(tp).map((goal) => (
                                <TopGoal
                                    zIndex={2000}
                                    key={goal.id}
                                    goal={goal}
                                    className='min-h-[60px] !w-full !flex-[100%]'
                                />
                            ))}
                        </div>
                    </React.Fragment>
                ))}
            </div>
        </XModal>
    )
})

// {
// goalsFilter(selected_widget_goals).filteredGoals.map((goal) => (
//     <TopGoal zIndex={2000} key={goal.id} goal={goal} className='min-h-[60px] !w-full !flex-[100%]' />
// ))
// }
