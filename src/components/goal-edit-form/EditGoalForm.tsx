import { InputCreatedAt } from '@/components-modal-windows/create-new-goal-modal/components/InputCreatedAt'
import { InputFinishedAt } from '@/components-modal-windows/create-new-goal-modal/components/InputFinishedAt'
import { InputSlogan } from '@/components-modal-windows/create-new-goal-modal/components/InputSlogan'
import { GoalFormTitleOption } from '@/components/goal-form-options/GoalFormTitleOption'
import { TextAreaDescription } from '@/components-modal-windows/create-new-goal-modal/components/TextAreaDescription'

import { observer } from 'mobx-react-lite'

import { EditGoalFormFooter } from './EditGoalFormFooter'
import { InputRitualInterval } from '@/components/input-ritual-type/InputRitualType'

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
