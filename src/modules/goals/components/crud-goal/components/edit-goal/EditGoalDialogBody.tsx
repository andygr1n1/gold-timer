import { observer } from 'mobx-react-lite'
import { GoalActionsMenu } from '../common-components/actions-menu/GoalActionsMenu'
import { useGoalsStore } from '@/StoreProvider'
import { GoalDetails } from '../common-components/GoalDetails'
import { GoalTitleInput } from '../common-components/GoalTitleInput'
import { GoalSloganInput } from '../common-components/GoalSloganInput'
import { GoalDescriptionRichInput } from '../common-components/GoalDescriptionRichInput'
import { GoalRitualIntervalInput } from '../common-components/input-ritual-type/GoalRitualIntervalInput'
import { FormFooter } from '@/components/form/FormFooter'
import { GoalFinishCalendarInput } from '../common-components/GoalFinishCalendarInput'

export const EditGoalDialogBody: React.FC = observer(() => {
    const { edit_goal } = useGoalsStore()
    return edit_goal ? (
        <>
            <div className='flex flex-col gap-10 pb-10'>
                <GoalActionsMenu goal={edit_goal} />
                <GoalDetails goal={edit_goal} />
            </div>
            <div className='flex flex-col gap-4 py-2'>
                <GoalTitleInput goal={edit_goal} />
                <GoalSloganInput goal={edit_goal} />
                <GoalDescriptionRichInput goal={edit_goal} />
                <GoalFinishCalendarInput goal={edit_goal} hide={!!edit_goal.goal_ritual} />
                <GoalRitualIntervalInput goal={edit_goal} hide={!edit_goal.goal_ritual} />
            </div>
            <Footer />
        </>
    ) : null
})

const Footer = observer(() => {
    const { updateGoal, edit_goal, onChangeField, openViewMode, goals } = useGoalsStore()

    const onCancel = () => onChangeField('edit_goal', undefined)
    if (!edit_goal) return null

    return (
        <FormFooter
            onOk={updateGoal}
            disabled={!edit_goal.goalDataValidator}
            onCancel={() => {
                if (edit_goal.redirected) {
                    openViewMode(edit_goal.id)
                } else if (edit_goal.goal_ritual && !edit_goal.isRitualGoal) {
                    edit_goal.onChangeField('goal_ritual', null)
                    edit_goal.onChangeField(
                        'deleted_at',
                        goals.find((goal) => goal.id === edit_goal.id)?.deleted_at || null,
                    )
                    return
                } else {
                    onCancel()
                }
            }}
        />
    )
})
