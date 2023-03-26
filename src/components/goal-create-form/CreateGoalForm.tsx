import { XButton } from '@/components-x/xbutton/XButton'
import { CreateFinishDate } from '@/components-modals/create-new-goal-modal/components/CreateFinishDate'

import { useGoalsStore } from '@/StoreProvider'
import { Divider } from 'antd'
import { observer } from 'mobx-react-lite'
import { GoalFormTitleOption } from '@/components/goal-form-options/GoalFormTitleOption'
import { InputSlogan } from '@/components-modals/create-new-goal-modal/components/InputSlogan'
import { TextAreaDescription } from '@/components-modals/create-new-goal-modal/components/TextAreaDescription'
import { GoalFormIsFavoriteOption } from '../goal-form-options/GoalFormIsFavoriteOption'

export const CreateGoalForm: React.FC = observer(() => {
    return (
        <div className='relative flex  flex-col '>
            <GoalFormTitleOption />

            <InputSlogan />

            <TextAreaDescription />

            <CreateFinishDate />

            <Divider />

            <Footer />
        </div>
    )
})

const Footer = observer(() => {
    const { generateGoal, isNotValidToSaveGoalData } = useGoalsStore()

    return (
        <div className='flex h-[40px] w-full items-center justify-between gap-5'>
            <GoalFormIsFavoriteOption />
            <XButton className='h-[40px] w-[400px]' disabled={isNotValidToSaveGoalData} onClick={generateGoal}>
                Create new goal
            </XButton>
        </div>
    )
})
