import { XButton } from '@/components-x/xbutton/XButton'
import { CreateFinishDate } from '@/modules/create-new-goal-modal/goal-creator-components/body-inputs/CreateFinishDate'
import { InputSlogan } from '@/modules/create-new-goal-modal/goal-creator-components/body-inputs/InputSlogan'
import { InputTitle } from '@/modules/create-new-goal-modal/goal-creator-components/body-inputs/InputTitle'
import { TextAreaDescription } from '@/modules/create-new-goal-modal/goal-creator-components/body-inputs/TextAreaDescription'
import { useGoalsStore } from '@/StoreProvider'
import { Divider } from 'antd'
import { observer } from 'mobx-react-lite'

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
