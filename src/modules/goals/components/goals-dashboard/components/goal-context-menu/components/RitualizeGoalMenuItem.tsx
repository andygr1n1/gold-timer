import { IconInfinity } from '@/assets/icons/IconInfinity'
import { XMenuItem } from '@/components-x/x-dropdown/XMenuItem'
import { StyledButton } from '@/components/buttons/StyledButton'
import { notifySuccess } from '@/helpers/processMessage'
import { useRitualizeGoal } from '@/modules/goals/components/goal-editor-dialog/service/ritualize-goal/useRitualizeGoal'
import { isActiveRitualStatus } from '@/modules/goals/helpers/goalsGuards'
import { calculateIsFromFuture } from '@/modules/goals/helpers/optimizeActiveGoalsData'
import { type IGoalSchema } from '@/modules/goals/shared-service'

export const RitualizeGoalMenuItem: React.FC<{ goal: IGoalSchema; onClose: () => void }> = ({
    goal,
    onClose: onSettled,
}) => {
    const { ritualizeGoal } = useRitualizeGoal()
    const isFromFuture = calculateIsFromFuture(goal)

    const deletedAt = !!goal.deleted_at
    const isActiveRitual = isActiveRitualStatus(goal)

    const ritualizeAction = isActiveRitual && !isFromFuture && !deletedAt

    if (!ritualizeAction) return null

    return (
        <>
            <XMenuItem>
                <StyledButton
                    variant={'contained'}
                    size={'small'}
                    onClick={() => {
                        ritualizeGoal({
                            goal,
                            onSuccess: () => {
                                notifySuccess('Goal ritualized')
                            },
                            onSettled,
                        })
                    }}
                    startIcon={<IconInfinity className='mb-0.5 h-6 w-6 opacity-100 text-teal-500 hover:opacity-100' />}
                    className='!bg-teal-500'
                >
                    <span className='w-[120px] flex justify-start'>
                        <span>Ritualize</span>
                    </span>
                </StyledButton>
            </XMenuItem>
        </>
    )
}
