import { InputCreatedAt } from '@/modules/goals/components/create-edit-goal/components/InputCreatedAt'
import { InputFinishedAt } from '@/modules/goals/components/create-edit-goal/components/InputFinishedAt'
import { GoalRitualIntervalInput } from '@/modules/goals/components/create-edit-goal/components/input-ritual-type/GoalRitualIntervalInput'
import { GoalSloganInput } from '@/modules/goals/components/create-edit-goal/components/GoalSloganInput'
import { GoalDescriptionRichInput } from '@/modules/goals/components/create-edit-goal/components/GoalDescriptionRichInput'
import { XButton } from '@/components-x/x-button/XButton'

import { useGoalsStore, useRootStore } from '@/StoreProvider'
import { observer } from 'mobx-react-lite'
import { useEffect } from 'react'

export const GoalRitualForm: React.FC = observer(() => {
    const { new_goal } = useGoalsStore()
    if (!new_goal) return null
    useEffect(() => {
        return () => {
            new_goal?.onChangeField('goal_ritualized_mode', false)
        }
    }, [])

    return (
        <>
            <div className='relative my-5 flex flex-col '>
                <GoalSloganInput />
                <GoalDescriptionRichInput />
                <InputCreatedAt />
                <InputFinishedAt />
                <GoalRitualIntervalInput />
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
    if (!new_goal) return null

    return (
        <div className='my-2 flex justify-end'>
            <XButton disabled={!new_goal.isValidForMutation} onClick={handleRitualize} className='flex self-end'>
                Ritualize
            </XButton>
        </div>
    )
})
