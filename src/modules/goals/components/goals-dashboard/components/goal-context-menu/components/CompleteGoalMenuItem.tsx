import { IconCheck } from '@/assets/icons/IconCheck'
import { XMenuItem } from '@/components-x/x-dropdown/XMenuItem'
import { StyledButton } from '@/components/buttons/StyledButton'
import { notifySuccess } from '@/helpers/processMessage'
import { useUpdateGoalStatus } from '@/modules/goals/components/goal-editor-dialog/service/update-goal-status/useUpdateGoalStatus.service'
import { isActiveRitualStatus, isCompletedGoalStatus } from '@/modules/goals/helpers/goalsGuards'
import { type IGoalSchema, goalStatusEnum } from '@/modules/goals/shared-service'

export const CompleteGoalMenuItem: React.FC<{ goal: IGoalSchema; onClose: () => void }> = ({
    goal,
    onClose: onSettled,
}) => {
    const { updateGoalStatus } = useUpdateGoalStatus()

    const renderValidation = isActiveRitualStatus(goal) || isCompletedGoalStatus(goal.status)
    if (renderValidation) return null

    return (
        <>
            <XMenuItem>
                <StyledButton
                    variant={'contained'}
                    size={'small'}
                    onClick={() => {
                        updateGoalStatus({
                            goal,
                            status: goalStatusEnum.completed,
                            onSuccess: () => {
                                notifySuccess('Goal completed')
                            },
                            onSettled,
                        })
                    }}
                    startIcon={<IconCheck className='mb-0.5 h-6 w-6 opacity-100 hover:opacity-100' />}
                >
                    <span className='w-[120px] flex justify-start '>
                        <span>Complete</span>
                    </span>
                </StyledButton>
            </XMenuItem>
        </>
    )
}
