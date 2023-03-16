import { XButton } from '@/components-x/xbutton/XButton'
import { CreateFinishDate } from '@/components-modals/create-new-goal-modal/components/CreateFinishDate'

import { useGoalsStore } from '@/StoreProvider'
import { Divider } from 'antd'
import { observer } from 'mobx-react-lite'
import { InputTitle } from '@/components-modals/create-new-goal-modal/components/InputTitle'
import { InputSlogan } from '@/components-modals/create-new-goal-modal/components/InputSlogan'
import { TextAreaDescription } from '@/components-modals/create-new-goal-modal/components/TextAreaDescription'

export const CreateGoalForm: React.FC = observer(() => {
    return (
        <div className='relative flex  flex-col '>
            <InputTitle />

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
        <div className='flex h-[40px] w-full items-center justify-end pb-5'>
            <XButton disabled={isNotValidToSaveGoalData} onClick={generateGoal}>
                Create new goal
            </XButton>
        </div>
    )
})
