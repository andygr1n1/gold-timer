import { XInput } from '@/components-x/x-input/XInput'
import { ActiveGoalCreatedAt } from '@/modules/goals/components/goal-crud/components/common-components/ActiveGoalCreatedAt'
import { FormLabel } from '@/components/form/FormLabel'
import { IGoal } from '@/modules/goals/service/types'
import { format } from 'date-fns'
import { observer } from 'mobx-react-lite'
import { convertStringDate } from '@/helpers/date.helpers'

export const GoalCreatedAt: React.FC<{ goal: IGoal }> = observer(({ goal }) => {
    const created = goal?.goal_ritual?.created_at ? goal?.goal_ritual?.created_at : goal.created_at
    return created ? (
        <div>
            <FormLabel title='Created' />
            <ActiveGoalCreatedAt goal={goal} />
            {created && (
                <XInput
                    onChange={() => undefined}
                    disabled={true}
                    readOnly={true}
                    value={format(convertStringDate(created), 'do MMMM yyyy')}
                />
            )}
        </div>
    ) : null
})
