import { InputCreatedAt } from '@/components-modals/create-new-goal-modal/components/InputCreatedAt'
import { InputFinishedAt } from '@/components-modals/create-new-goal-modal/components/InputFinishedAt'
import { InputSlogan } from '@/components-modals/create-new-goal-modal/components/InputSlogan'
import { GoalFormTitleOption } from '@/components/goal-form-options/GoalFormTitleOption'
import { TextAreaDescription } from '@/components-modals/create-new-goal-modal/components/TextAreaDescription'
import { XButton } from '@/components-x/x-button/XButton'

import { useGoalsStore } from '@/StoreProvider'
import { observer } from 'mobx-react-lite'
import {
    GoalsListModalState$$,
    toggleGoalsListModalVisibility,
} from '@/components-modals/goals-list-modal/GoalsListModal'

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

    const handleOnClick = () => {
        generateGoal().then(() => {
            if (GoalsListModalState$$.force_edit) {
                toggleGoalsListModalVisibility()
            }
        })
    }

    return (
        <div className='flex justify-end'>
            <XButton disabled={!new_goal.isValidForMutation} onClick={handleOnClick} className='flex self-end'>
                Save
            </XButton>
        </div>
    )
})
