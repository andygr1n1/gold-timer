import { InputFinishedAt } from '@/modules/goals/components/new-goal-dialog/components/InputFinishedAt'
import { InputSlogan } from '@/modules/goals/components/new-goal-dialog/components/InputSlogan'
import { GoalFormTitleOption } from '@/components/goal-form-options/GoalFormTitleOption'
import { TextAreaDescription } from '@/modules/goals/components/new-goal-dialog/components/TextAreaDescription'

import { observer } from 'mobx-react-lite'

import { EditGoalFormFooter } from './EditGoalFormFooter'
import { InputRitualInterval } from '@/components/input-ritual-type/InputRitualType'
import { InputCreatedAt } from '@/modules/goals/components/new-goal-dialog/components/InputCreatedAt'

export const EditGoalForm: React.FC = observer(() => {
    return (
        <>
            <div className='relative my-5 flex flex-col '>
                <GoalFormTitleOption />
                <InputSlogan />
                <TextAreaDescription />
                <InputCreatedAt />
                <InputFinishedAt />
                <InputRitualInterval />
            </div>
            <EditGoalFormFooter />
        </>
    )
})
