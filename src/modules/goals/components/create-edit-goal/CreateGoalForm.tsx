import { useGoalsStore } from '@/StoreProvider'
import { observer } from 'mobx-react-lite'
import { GoalFormTitleOption } from '@/components/goal-form-options/GoalFormTitleOption'
import { GoalFormIsFavoriteOption } from '../../../../components/goal-form-options/GoalFormIsFavoriteOption'
import { FormFooter } from '@/components/form/FormFooter'
import { InputSlogan } from './components/InputSlogan'
import { TextAreaDescription } from './components/TextAreaDescription'
import { CreateFinishDate } from './components/CreateFinishDate'

export const CreateGoalForm: React.FC = observer(function CreateGoalForm() {
    return (
        <div className='relative flex  flex-col gap-4'>
            <GoalFormTitleOption />

            <InputSlogan />

            <TextAreaDescription />

            <CreateFinishDate />

            <Footer />
        </div>
    )
})

const Footer = observer(() => {
    const { generateGoal, isNotValidToSaveGoalData, closeGoalCreator } = useGoalsStore()
    return <FormFooter onOk={generateGoal} disabled={isNotValidToSaveGoalData} onCancel={closeGoalCreator} />
})
