import { XDatePicker } from '@/components-x/x-date-picker/XDatePicker'
import { getYear } from 'date-fns'
import { FormLabel } from '@/components/form/FormLabel'
import { prepareFinishedAtForInsert } from '@/helpers/date.helpers'
import { useGoalEditor$ } from '../../stores/goal-editor-store/useGoalEditor.store'
import { useFormikContext } from 'formik'
import { type IGoalSchema } from '@/modules/goals/shared-service'
import { cn } from '@/helpers/cn'

export const GoalFinishCalendarInput = () => {
    const { viewMode } = useGoalEditor$()
    const formikContext = useFormikContext<IGoalSchema>()

    function onDatePickerChange(day: Date | undefined) {
        day && formikContext.setFieldValue('finished_at', prepareFinishedAtForInsert(new Date(day)))
    }
    function onClear() {
        formikContext.setFieldValue('finished_at', null)
    }

    return (
        <div>
            <FormLabel title={cn('Finish Estimation', !viewMode && ' *')} />

            <XDatePicker
                numberOfMonths={1}
                mode='single'
                /* picker is converting date automatically by UTC */
                selected={formikContext.values.finished_at ? new Date(formikContext.values.finished_at) : undefined}
                onSelect={onDatePickerChange}
                dateFormat={'do MMMM yyyy'}
                captionLayout='dropdown-buttons'
                fromYear={getYear(new Date(Date.now())) - 25}
                toYear={getYear(new Date(Date.now())) + 100}
                fixedWeeks
                showOutsideDays
                showWeekNumber
                // ISOWeek
                onClear={onClear}
                readOnly={viewMode}
                showToday
            />
        </div>
    )
}
