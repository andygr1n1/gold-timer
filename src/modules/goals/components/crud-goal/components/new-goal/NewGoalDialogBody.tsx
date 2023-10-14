import { observer } from 'mobx-react-lite'
import { useGoalsStore } from '@/StoreProvider'
import { GoalDetails } from '../common-components/GoalDetails'
import { GoalTitleInput } from '../common-components/GoalTitleInput'
import { GoalSloganInput } from '../common-components/GoalSloganInput'
import { GoalDescriptionRichInput } from '../common-components/GoalDescriptionRichInput'
import { GoalFinishCalendarInput } from '../common-components/GoalFinishCalendarInput'
import { FormFooter } from '@/components/form/FormFooter'

export const NewGoalDialogBody: React.FC = observer(() => {
    const { new_goal } = useGoalsStore()

    return new_goal ? (
        <>
            <div className='flex flex-col gap-10 pb-10'>
                <GoalDetails goal={new_goal} />
            </div>
            <div className='flex flex-col gap-4 py-2'>
                <GoalTitleInput goal={new_goal} />
                <GoalSloganInput goal={new_goal} />
                <GoalDescriptionRichInput goal={new_goal} />
                <GoalFinishCalendarInput goal={new_goal} />
            </div>
            <Footer />
        </>
    ) : null
})

const Footer = observer(() => {
    const { createNewGoal, new_goal, onChangeField, openViewMode } = useGoalsStore()
    const onCancel = () => {
        if (new_goal?.parent_goal_id) {
            openViewMode(new_goal.parent_goal_id)
        }
        onChangeField('new_goal', undefined)
    }

    return (
        <FormFooter
            onOk={createNewGoal}
            disabled={!new_goal?.goalDataValidator}
            disabledTooltip={'Title required'}
            onCancel={onCancel}
        />
    )
})
