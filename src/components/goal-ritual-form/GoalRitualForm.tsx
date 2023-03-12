import { XButton } from '@/components-x/xbutton/XButton'
import { InputCreatedAt } from '@/modules/create-new-goal-modal/goal-creator-components/body-inputs/InputCreatedAt'
import { InputFinishedAt } from '@/modules/create-new-goal-modal/goal-creator-components/body-inputs/InputFinishedAt'
import { InputRitualInterval } from '@/modules/create-new-goal-modal/goal-creator-components/body-inputs/InputRitualInterval'
import { InputSlogan } from '@/modules/create-new-goal-modal/goal-creator-components/body-inputs/InputSlogan'
import { InputTitle } from '@/modules/create-new-goal-modal/goal-creator-components/body-inputs/InputTitle'
import { TextAreaDescription } from '@/modules/create-new-goal-modal/goal-creator-components/body-inputs/TextAreaDescription'
import { useGoalsStore } from '@/StoreProvider'
import { observer } from 'mobx-react-lite'
import { useEffect } from 'react'

export const GoalRitualForm: React.FC = observer(() => {
    const { editable_goal } = useGoalsStore()

    useEffect(() => {
        return () => {
            editable_goal?.onChangeField('goal_ritualized_mode', false)
        }
    }, [])

    return (
        <>
            <div className='relative my-5 flex flex-col '>
                <InputTitle />
                <InputSlogan />
                <TextAreaDescription />
                <InputCreatedAt />
                <InputFinishedAt />
                <InputRitualInterval />
            </div>
            <Footer />
        </>
    )
})

const Footer = observer(() => {
    const { ritualizeGoal, new_goal } = useGoalsStore()

    return (
        <div className='flex justify-end'>
            <XButton disabled={!new_goal.isValidForMutation} onClick={ritualizeGoal} className='flex self-end'>
                Ritualize
            </XButton>
        </div>
    )
})
