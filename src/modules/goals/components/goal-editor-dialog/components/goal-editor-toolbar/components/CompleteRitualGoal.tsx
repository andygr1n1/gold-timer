import { StyledButton } from '@/components/buttons/StyledButton'
import { IGoalSchema } from '@/modules/goals/shared-service/types'
import { calculateIsCompleted } from '@/modules/goals/helpers/goalsGuards'
import { useUpdateGoalStatus } from '../../../service/update-goal-status/useUpdateGoalStatus.service'
import { useGoalEditor$ } from '../../../stores/goal-editor-store/useGoalEditor.store'
import { calculateIsRitual } from '@/modules/goals/helpers/optimizeActiveGoalsData'
import { IconCompletedFilled } from '@/assets/icons/IconCompleted'
import { XTooltip } from '@/components-x/x-tooltip/XTooltip'

export const CompleteRitualGoal: React.FC<{ goal: IGoalSchema }> = ({ goal }) => {
    const { updateGoalStatus } = useUpdateGoalStatus()
    const { onCancel } = useGoalEditor$()
    if (calculateIsCompleted(goal.status) || !calculateIsRitual(goal)) return null

    return (
        <>
            <StyledButton
                id='completeRitualGoal'
                variant={'text'}
                size={'custom'}
                className='group'
                startIcon={
                    <IconCompletedFilled className='h-5 w-5 group-hover:text-rose-500 opacity-70 duration-300 group-hover:opacity-100' />
                }
                onClick={() => {
                    updateGoalStatus({
                        goal,
                        onSuccess: onCancel,
                    })
                }}
            />
            {<XTooltip anchorSelect='#completeRitualGoal'>Finish rituals</XTooltip>}
        </>
    )
}
