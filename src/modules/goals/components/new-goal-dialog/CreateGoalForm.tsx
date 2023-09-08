import { useGoalsStore } from '@/StoreProvider'
import { observer } from 'mobx-react-lite'
import { GoalFormTitleOption } from '@/components/goal-form-options/GoalFormTitleOption'
import { GoalFormIsFavoriteOption } from '../../../../components/goal-form-options/GoalFormIsFavoriteOption'
import { InputSlogan } from '@/modules/goals/components/new-goal-dialog/components/InputSlogan'
import { TextAreaDescription } from '@/modules/goals/components/new-goal-dialog/components/TextAreaDescription'
import { CreateFinishDate } from '@/modules/goals/components/new-goal-dialog/components/CreateFinishDate'
import { FormFooter } from '@/components/form/FormFooter'

export const CreateGoalForm: React.FC = observer(function CreateGoalForm() {
    return (
        <div className='relative flex  flex-col gap-4'>
            <GoalFormTitleOption />

            <InputSlogan />

            <TextAreaDescription />

            <CreateFinishDate />

            <GoalFormIsFavoriteOption />

            <Footer />
        </div>
    )
})

const Footer = observer(() => {
    const { generateGoal, isNotValidToSaveGoalData, closeGoalCreator } = useGoalsStore()
    return <FormFooter onOk={generateGoal} disabled={isNotValidToSaveGoalData} onCancel={closeGoalCreator} />
})
