import { XButton } from '@/components-x/xbutton/XButton'
import { InputCreatedAt } from '@/modules/create-new-goal-modal/goal-creator-components/body-inputs/InputCreatedAt'
import { InputFinishedAt } from '@/modules/create-new-goal-modal/goal-creator-components/body-inputs/InputFinishedAt'
import { InputSlogan } from '@/modules/create-new-goal-modal/goal-creator-components/body-inputs/InputSlogan'
import { InputTitle } from '@/modules/create-new-goal-modal/goal-creator-components/body-inputs/InputTitle'
import { TextAreaDescription } from '@/modules/create-new-goal-modal/goal-creator-components/body-inputs/TextAreaDescription'
import { useGoalsStore } from '@/StoreProvider'
import { observer } from 'mobx-react-lite'

export const EditGoalForm: React.FC = observer(() => {
    return (
        <>
            <div className='relative my-5 flex flex-col '>
                <InputTitle />
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
