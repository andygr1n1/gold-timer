import { observer } from 'mobx-react-lite'
import { XModal } from '@/components-x/x-modal/XModal'
import { useGoalsStore } from '@/StoreProvider'
import { TopGoal } from '../TopGoal'
import { XInput } from '@/components-x/x-input/XInput'
import { FormLabel } from '@/components/form/FormLabel'
import React from 'react'
import { getMonthNumber } from '@/helpers/getMonthNumber.helper'
import { SelectedWidgetGoalsViewLogo } from './SelectedWidgetGoalsViewLogo'

export const SelectedWidgetGoalsView: React.FC = observer(function CRUD_GoalDialog() {
    const {
        goals_filter$: {
            selected_widget_goals_context,
            onChangeField,
            goals_selected_widget_input_filter,
            selectedWidgetGoalsConstructor,
        },
        selected_goal,
        new_goal,
        edit_goal,
    } = useGoalsStore()

    const onCancel = () => {
        const goalIsOpen = new_goal || edit_goal || selected_goal
        !goalIsOpen && onChangeField('selected_widget_goals_context', null)
    }

    return (
        <XModal open={!!selected_widget_goals_context} onCancel={onCancel} fullHeight>
            {/*  */}
            <SelectedWidgetGoalsViewLogo />
            <FormLabel title='Search:' />
            <XInput
                type='text'
                autoFocus={false}
                value={goals_selected_widget_input_filter}
                onChange={(e) => onChangeField('goals_selected_widget_input_filter', e.target.value)}
                className='w-full'
            />
            <div tabIndex={0} className=' my-10 flex flex-col gap-4'>
                {selectedWidgetGoalsConstructor.timeFrame.map((tp) => {
                    const renderGoals = selectedWidgetGoalsConstructor.filteredGoals(tp)
                    return renderGoals.length ? (
                        <React.Fragment key={tp}>
                            <div>{tp && <FormLabel title={tp} />}</div>
                            {tp && (
                                <div className='bg-global-2-bg-plasma animate-opacity-5 relative h-32'>
                                    <div className='absolute-center animate-opacity-5 z-1 text-cText flex h-full w-full items-center justify-center text-2xl opacity-20'>
                                        {tp}
                                    </div>
                                    <img
                                        // loading='lazy'
                                        title={tp}
                                        src={`${
                                            import.meta.env.VITE_FIRE_BUNNY_STORAGE
                                        }/utility/seasons/${getMonthNumber(tp.split(' ')[1])}.png`}
                                        className='rounded-xs animate-opacity-5 absolute-center z-1 z-10 flex h-32 w-full items-center justify-center'
                                    />
                                </div>
                            )}
                            <div className='flex flex-col gap-5'>
                                {renderGoals.map((goal) => (
                                    <TopGoal
                                        zIndex={2000}
                                        key={goal.id}
                                        goal={goal}
                                        className='min-h-[60px] !w-full !flex-[100%]'
                                    />
                                ))}
                            </div>
                        </React.Fragment>
                    ) : null
                })}
            </div>
        </XModal>
    )
})

// {
// goalsFilter(selected_widget_goals).filteredGoals.map((goal) => (
//     <TopGoal zIndex={2000} key={goal.id} goal={goal} className='min-h-[60px] !w-full !flex-[100%]' />
// ))
// }
