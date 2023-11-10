import { observer } from 'mobx-react-lite'
import { GoalActionsMenu } from '../common-components/actions-menu/GoalActionsMenu'
import { GoalDetails } from '../common-components/GoalDetails'
import { useGoalsStore } from '@/StoreProvider'
import { GoalTitleInput } from '../common-components/GoalTitleInput'
import { GoalSloganInput } from '../common-components/GoalSloganInput'
import { GoalDescriptionRichInput } from '../common-components/GoalDescriptionRichInput'
import { GoalCreatedAt } from '../common-components/GoalCreatedAt'
import { GoalFinishCalendarInput } from '../common-components/GoalFinishCalendarInput'
import { GoalRitualIntervalInput } from '../common-components/input-ritual-type/GoalRitualIntervalInput'
import { IGoal$ } from '@/modules/goals/mst/types'
import { FormFooter } from '@/components/form/FormFooter'
import { Icon } from '@iconify/react'

export const ViewGoalDialogBody: React.FC = observer(() => {
    const { selected_goal } = useGoalsStore()
    return selected_goal ? (
        <>
            <div className='flex flex-col gap-10 pb-10'>
                <GoalActionsMenu goal={selected_goal} />
                <GoalDetails goal={selected_goal} />
            </div>
            <div className='flex flex-col gap-4 py-2'>
                <GoalTitleInput goal={selected_goal} view_mode />
                <GoalSloganInput goal={selected_goal} view_mode hide={!selected_goal.slogan} />
                <GoalDescriptionRichInput goal={selected_goal} view_mode hide={!selected_goal.description} />
                <GoalCreatedAt goal={selected_goal} view_mode hide={selected_goal.hasRitualPower} />
                <GoalFinishCalendarInput goal={selected_goal} view_mode />
                <GoalRitualIntervalInput goal={selected_goal} view_mode hide={!selected_goal.hasRitualPower} />
            </div>
            <Footer goal={selected_goal} />
        </>
    ) : null
})

const Footer: React.FC<{ goal: IGoal$ }> = observer(({ goal }) => {
    const { onChangeField } = useGoalsStore()

    const { hasRitualPower: isRitualGoal, completeGoal, deleted_at, isFromFuture, isCompleted } = goal

    const onCancel = () => {
        onChangeField('selected_goal', undefined)
    }

    return (
        <FormFooter
            okTitle={
                <div className='flex items-center justify-center gap-2'>
                    <Icon
                        icon={isRitualGoal ? 'icon-park-outline:auto-focus' : 'fa:check-circle'}
                        width={16}
                        height={16}
                    />
                    <div>{isRitualGoal ? 'Ritualize' : 'Complete'}</div>
                </div>
            }
            onOk={() => {
                completeGoal()
            }}
            disabled={!!deleted_at || (isRitualGoal && isFromFuture)}
            disabledTooltip={deleted_at ? 'Goal is deleted' : isRitualGoal ? 'Wait for estimation day' : ''}
            onCancel={onCancel}
            hideOkButton={isCompleted}
        />
    )
})
