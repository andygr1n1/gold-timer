import { XDatePicker } from '@/components-x/x-date-picker/XDatePicker'
import { getYear } from 'date-fns'
import { FormLabel } from '@/components/form/FormLabel'
import { prepareFinishedAtForInsert } from '@/helpers/date.helpers'
import { useFormikContext } from 'formik'
import { type IAch } from '@/modules/achievements/services/types'

export const AchCreatedAtInput = () => {
    const formikContext = useFormikContext<IAch>()

    function onDatePickerChange(day: Date | undefined) {
        day && formikContext.setFieldValue('created_at', prepareFinishedAtForInsert(new Date(day)))
    }
    function onClear() {
        formikContext.setFieldValue('created_at', null)
    }

    return (
        <div>
            <FormLabel title='Date *' />

            <XDatePicker
                numberOfMonths={1}
                mode='single'
                /* picker is converting date automatically by UTC */
                selected={formikContext.values.created_at ? new Date(formikContext.values.created_at) : undefined}
                onSelect={onDatePickerChange}
                dateFormat={'do MMMM yyyy'}
                captionLayout='dropdown-buttons'
                fromYear={getYear(new Date(Date.now())) - 100}
                toYear={getYear(new Date(Date.now())) + 100}
                fixedWeeks
                showOutsideDays
                showWeekNumber
                onClear={onClear}
                showToday
            />
        </div>
    )
}
