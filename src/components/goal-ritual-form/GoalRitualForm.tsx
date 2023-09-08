import { InputCreatedAt } from '@/modules/goals/components/new-goal-dialog/components/InputCreatedAt'
import { InputFinishedAt } from '@/modules/goals/components/new-goal-dialog/components/InputFinishedAt'
import { InputRitualInterval } from '@/components/input-ritual-type/InputRitualType'
import { InputSlogan } from '@/modules/goals/components/new-goal-dialog/components/InputSlogan'
import { GoalFormTitleOption } from '@/components/goal-form-options/GoalFormTitleOption'
import { TextAreaDescription } from '@/modules/goals/components/new-goal-dialog/components/TextAreaDescription'
import { XButton } from '@/components-x/x-button/XButton'

import { useGoalsStore, useRootStore } from '@/StoreProvider'
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
                <GoalFormTitleOption />
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
    const {
        goals$: { ritualizeGoal, new_goal },
        modal_windows$: {
            goals_manager_mw$: { forceClose },
        },
    } = useRootStore()

    const handleRitualize = () => {
        ritualizeGoal().then(() => {
            forceClose()
        })
    }

    return (
        <div className='my-2 flex justify-end'>
            <XButton disabled={!new_goal.isValidForMutation} onClick={handleRitualize} className='flex self-end'>
                Ritualize
            </XButton>
        </div>
    )
})
