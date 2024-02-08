import { XInput } from '@/components-x/x-input/XInput'
import { ActiveGoalCreatedAt } from '@/components/components-modal-windows/goals-manager-mw/components/ActiveGoalCreatedAt'
import { FormLabel } from '@/components/form/FormLabel'
import { IActiveGoalOptimized } from '@/modules/goals/interfaces/types'
import { format, parseISO } from 'date-fns'
import { observer } from 'mobx-react-lite'

export const GoalCreatedAt: React.FC<{ goal: IActiveGoalOptimized }> = observer(({ goal }) => {
    const created = goal?.goal_ritual?.created_at ? goal?.goal_ritual?.created_at : goal.created_at
    console.log('goal?.goal_ritual?.created_at ', goal?.goal_ritual?.created_at)
    return created ? (
        <div>
            <FormLabel title='Created' />
            <ActiveGoalCreatedAt goal={goal} />
            {created && (
                <XInput
                    onChange={() => undefined}
                    disabled={true}
                    readOnly={true}
                    value={format(parseISO(created), 'do MMMM yyyy')}
                />
            )}
        </div>
    ) : null
})
