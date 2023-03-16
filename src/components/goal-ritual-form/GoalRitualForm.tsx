import { InputCreatedAt } from '@/components-modals/create-new-goal-modal/components/InputCreatedAt'
import { InputFinishedAt } from '@/components-modals/create-new-goal-modal/components/InputFinishedAt'
import { InputRitualInterval } from '@/components-modals/create-new-goal-modal/components/InputRitualInterval'
import { InputSlogan } from '@/components-modals/create-new-goal-modal/components/InputSlogan'
import { InputTitle } from '@/components-modals/create-new-goal-modal/components/InputTitle'
import { TextAreaDescription } from '@/components-modals/create-new-goal-modal/components/TextAreaDescription'
import { XButton } from '@/components-x/xbutton/XButton'

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
