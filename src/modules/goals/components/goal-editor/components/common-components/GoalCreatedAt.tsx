import { XInput } from '@/components-x/x-input/XInput'
import { ActiveGoalCreatedAt } from '@/modules/goals/components/goal-editor/components/common-components/ActiveGoalCreatedAt'
import { FormLabel } from '@/components/form/FormLabel'
import { format } from 'date-fns'
import { convertStringDate } from '@/helpers/date.helpers'
import { useFormikContext } from 'formik'
import { IGoalSchema } from '@/modules/goals/shared-service'

export const GoalCreatedAt = () => {
    const formikContext = useFormikContext<IGoalSchema>()

    const created = formikContext.values?.goal_ritual?.created_at
        ? formikContext.values?.goal_ritual?.created_at
        : formikContext.values.created_at

    return created ? (
        <div>
            <FormLabel title='Created' />
            <ActiveGoalCreatedAt />
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
}
