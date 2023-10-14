import { XInput } from '@/components-x/x-input/XInput'
import { ActiveGoalCreatedAt } from '@/components/components-modal-windows/goals-manager-mw/components/ActiveGoalCreatedAt'
import { FormLabel } from '@/components/form/FormLabel'
import { IGoal$ } from '@/modules/goals/mst/types'
import { format } from 'date-fns'
import { observer } from 'mobx-react-lite'

export const GoalCreatedAt: React.FC<{ goal: IGoal$; view_mode?: boolean; hide?: boolean }> = observer(
    ({ goal, view_mode = false, hide = false }) => {
        const { created_at } = goal

        return !hide ? (
            <div>
                <FormLabel title='Created' />
                <ActiveGoalCreatedAt goal={goal} />
                {created_at && (
                    <XInput
                        onChange={() => undefined}
                        disabled={view_mode}
                        readOnly={view_mode}
                        value={format(created_at, 'do MMMM yyyy')}
                    />
                )}
            </div>
        ) : null
    },
)
