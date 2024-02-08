import { IconComplete } from '@/assets/icons/IconComplete'
import { IconInfinity } from '@/assets/icons/IconInfinity'
import { FormFooter } from '@/components/form/FormFooter'
import { IActiveGoalOptimized } from '@/modules/goals/interfaces/types'
import { cancelViewMode } from '@/modules/goals/stores/selectedGoal.store'
import { useAtom } from 'jotai'
import { NewRitualGoal } from '../../goal-actions/NewRitualGoal'
import { CompleteRitualGoal } from '../../goal-actions/CompleteRitualGoal'
import { useMutateGoalStatus } from '@/modules/goals/service'
import { useMutateGoalRitualize } from '@/modules/goals/service/goal_ritualize/useMutateGoalRitualize'

export const ViewGoalFooter: React.FC<{ goal: IActiveGoalOptimized }> = ({ goal }) => {
    const { deleted_at, goal_ritual, isFromFuture, id } = goal
    const [, _cancelViewMode] = useAtom(cancelViewMode)
    const _useMutateGoalStatus = useMutateGoalStatus()
    const _useMutateGoalRitualize = useMutateGoalRitualize()

    return (
        <div className='relative'>
            <FormFooter
                onOk={() => {
                    !!goal_ritual
                        ? _useMutateGoalRitualize.mutate({ goal })
                        : _useMutateGoalStatus.mutate({ goal, status: 'active' })
                    _cancelViewMode()
                }}
                cancelTitle='Cancel'
                okTitle={
                    <div className='flex items-center justify-center gap-2'>
                        {goal_ritual ? (
                            <IconInfinity className='text-transparent' />
                        ) : (
                            <IconComplete className='text-white' />
                        )}
                        <div>{goal_ritual ? 'Ritualize' : 'Complete'}</div>
                    </div>
                }
                onCancel={() => _cancelViewMode()}
                disabled={!!deleted_at || (!!goal_ritual && isFromFuture)}
                disabledTooltip={deleted_at ? 'Goal is deleted' : !!goal_ritual ? 'Wait for estimation day' : ''}
                hideOkButton={goal.status === 'completed'}
            />
            {goal_ritual ? <CompleteRitualGoal goal={goal} /> : <NewRitualGoal goalId={id} />}
        </div>
    )
}
