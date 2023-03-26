import { InputCreatedAt } from '@/components-modals/create-new-goal-modal/components/InputCreatedAt'
import { InputFinishedAt } from '@/components-modals/create-new-goal-modal/components/InputFinishedAt'
import { InputSlogan } from '@/components-modals/create-new-goal-modal/components/InputSlogan'
import { GoalFormTitleOption } from '@/components/goal-form-options/GoalFormTitleOption'
import { TextAreaDescription } from '@/components-modals/create-new-goal-modal/components/TextAreaDescription'
import { XButton } from '@/components-x/xbutton/XButton'

import { useGoalsStore } from '@/StoreProvider'
import { observer } from 'mobx-react-lite'

export const EditGoalForm: React.FC = observer(() => {
    return (
        <>
            <div className='relative my-5 flex flex-col '>
                <GoalFormTitleOption />
                <InputSlogan />
                <TextAreaDescription />
                <InputCreatedAt />
                <InputFinishedAt />
            </div>
            <Footer />
        </>
    )
})

const Footer = observer(() => {
    const { generateGoal, new_goal } = useGoalsStore()

    return (
        <div className='flex justify-end'>
            <XButton disabled={!new_goal.isValidForMutation} onClick={generateGoal} className='flex self-end'>
                Save
            </XButton>
        </div>
    )
})
