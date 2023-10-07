import { observer } from 'mobx-react-lite'
import { XModal } from '@/components-x/x-modal/XModal'
import { GoalFormIsFavoriteOption } from '@/modules/goals/components/create-edit-goal/components/GoalFormIsFavoriteOption'
import { useGoalsStore } from '@/StoreProvider'
import { cloneDeep } from 'lodash-es'
import { FormFooter } from '@/components/form/FormFooter'
import { GoalTitleInput } from './components/GoalTitleInput'
import { GoalSloganInput } from './components/GoalSloganInput'
import { GoalDescriptionRichInput } from './components/GoalDescriptionRichInput'
import { GoalFinishCalendarInput } from './components/GoalFinishCalendarInput'
import { GoalCreatedAt } from './components/GoalCreatedAt'
import { GoalRitualIntervalInput } from './components/input-ritual-type/GoalRitualIntervalInput'

export const CreateEditGoalDialog: React.FC = observer(function CreateEditGoalDialog() {
    const { onChangeField, new_goal } = useGoalsStore()

    const onCancel = () => onChangeField('new_goal', undefined)

    console.log('new_goal', cloneDeep(new_goal))

    return (
        <XModal
            open={!!new_goal}
            onCancel={onCancel}
            title={
                <div className='flex items-center justify-center gap-5'>
                    {!new_goal?.view_mode && <div>{new_goal?.edit_mode ? 'Edit Goal' : 'Create Goal'}</div>}
                    <GoalFormIsFavoriteOption />
                </div>
            }
        >
            {/* New Goal Image */}
            {/*  */}
            {/* New Sprint Form */}
            <div className='flex flex-col gap-4'>
                <GoalTitleInput />
                <GoalSloganInput />
                <GoalDescriptionRichInput />
                <GoalCreatedAt />
                <GoalFinishCalendarInput />
                <GoalRitualIntervalInput />
            </div>
            <Footer />
        </XModal>
    )
})

const Footer = observer(() => {
    const { generateGoal, new_goal, cancelGoalCreator } = useGoalsStore()
    return <FormFooter onOk={generateGoal} disabled={!new_goal?.goalDataValidator} onCancel={cancelGoalCreator} />
})
