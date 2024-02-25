import { IconComplete } from '@/assets/icons/IconComplete'
import { IconInfinity } from '@/assets/icons/IconInfinity'
import { FormFooter } from '@/components/form/FormFooter'
import { IGoal } from '@/modules/goals/service/types'
import { cancelViewMode } from '@/modules/goals/stores/selectedGoal.store'
import { useAtom } from 'jotai'
import { NewRitualGoal } from '../../goal-actions/NewRitualGoal'
import { CompleteRitualGoal } from '../../goal-actions/CompleteRitualGoal'
import { useMutateGoalStatus } from '@/modules/goals/service'
import { useMutateGoalRitualize } from '@/modules/goals/service/updateGoalRitualize/useMutateGoalRitualize'
import { isCompleted } from '@/modules/goals/helpers/goalsGuards'
import { IconFocus } from '@/assets/icons'
import { calculateIsFromFuture } from '@/modules/goals/helpers/optimizeActiveGoalsData'

export const ViewGoalFooter: React.FC<{ goal: IGoal }> = ({ goal }) => {
    const { deleted_at, goal_ritual, id } = goal
    const [, _cancelViewMode] = useAtom(cancelViewMode)
    const _useMutateGoalStatus = useMutateGoalStatus()
    const _useMutateGoalRitualize = useMutateGoalRitualize()
    const _isCompleted = isCompleted(goal.status)
    const isFromFuture = calculateIsFromFuture(goal)

    return (
        <div className='relative'>
            <FormFooter
                onOk={() => {
                    !!goal_ritual
                        ? _useMutateGoalRitualize.mutate({ goal })
                        : _useMutateGoalStatus.mutate({ goal, status: _isCompleted ? 'active' : 'completed' })
                    !_isCompleted && _cancelViewMode()
                }}
                cancelTitle='Cancel'
                okTitle={
                    <div className='flex items-center justify-center gap-2'>
                        {goal_ritual ? (
                            <IconInfinity className='text-transparent' />
                        ) : _isCompleted ? (
                            <IconFocus className='text-white' width={16} height={16} />
                        ) : (
                            <IconComplete className='text-white' width={16} height={16} />
                        )}
                        <div>{goal_ritual ? 'Ritualize' : _isCompleted ? 'Reactivate' : 'Complete'}</div>
                    </div>
                }
                onCancel={() => _cancelViewMode()}
                disabled={!!deleted_at || (!!goal_ritual && isFromFuture)}
                disabledTooltip={deleted_at ? 'Goal is deleted' : !!goal_ritual ? 'Wait for estimation day' : ''}
            />
            {goal_ritual ? <CompleteRitualGoal goal={goal} /> : <NewRitualGoal goalId={id} />}
        </div>
    )
}
