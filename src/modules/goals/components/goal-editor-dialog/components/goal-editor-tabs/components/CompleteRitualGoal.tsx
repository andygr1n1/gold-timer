import { StyledButton } from '@/components/buttons/StyledButton'
import { type IGoalSchema, goalStatusEnum } from '@/modules/goals/shared-service/types'
import { isCompletedGoalStatus } from '@/modules/goals/helpers/goalsGuards'
import { useUpdateGoalStatus } from '../../../service/update-goal-status/useUpdateGoalStatus.service'
import { useGoalEditor$ } from '../../../stores/goal-editor-store/useGoalEditor.store'
import { calculateIsRitualWithPower } from '@/modules/goals/helpers/optimizeActiveGoalsData'
import { IconCompletedFilled } from '@/assets/icons/IconCompleted'
import { XTooltip } from '@/components-x/x-tooltip/XTooltip'

export const CompleteRitualGoal: React.FC<{ goal: IGoalSchema }> = ({ goal }) => {
    const { updateGoalStatus } = useUpdateGoalStatus()
    const { onCancel, newMode } = useGoalEditor$()
    if (newMode || isCompletedGoalStatus(goal.status) || !calculateIsRitualWithPower(goal)) return null

    return (
        <>
            <StyledButton
                id='completeRitualGoal'
                variant={'outlined'}
                size={'small'}
                className='group !border-blue-500/50'
                startIcon={<IconCompletedFilled className='h-5 w-5' />}
                onClick={() => {
                    updateGoalStatus({
                        goal,
                        status: goalStatusEnum.completed,
                        onSuccess: onCancel,
                    })
                }}
            />
            {<XTooltip anchorSelect='#completeRitualGoal'>Finish ritual</XTooltip>}
        </>
    )
}
