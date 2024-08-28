import { XDatePicker } from '@/components-x/x-date-picker/XDatePicker'
import { getYear } from 'date-fns'
import { FormLabel } from '@/components/form/FormLabel'
import { prepareFinishedAtForInsert } from '@/helpers/date.helpers'
import { useFormikContext } from 'formik'
import { useProfile$ } from '@/modules/profile/stores/useProfile.store'
import { type IUserProfileSchema } from '@/modules/profile/services'

export const ProfileBirthdayInput = () => {
    const { viewMode } = useProfile$()
    const formikContext = useFormikContext<IUserProfileSchema>()

    function onDatePickerChange(day: Date | undefined) {
        day && formikContext.setFieldValue('birthday', prepareFinishedAtForInsert(new Date(day)))
    }
    function onClear() {
        formikContext.setFieldValue('birthday', null)
    }

    return (
        <div>
            <FormLabel title='Birthday' />

            <XDatePicker
                numberOfMonths={1}
                mode='single'
                /* picker is converting date automatically by UTC */
                selected={formikContext.values.birthday ? new Date(formikContext.values.birthday) : undefined}
                onSelect={onDatePickerChange}
                dateFormat={'do MMMM yyyy'}
                captionLayout='dropdown-buttons'
                fromYear={getYear(new Date(Date.now())) - 100}
                toYear={getYear(new Date(Date.now())) + 100}
                fixedWeeks
                showOutsideDays
                showWeekNumber
                // ISOWeek
                onClear={onClear}
                placeholder='Set date'
                readOnly={viewMode}
                showToday
            />
        </div>
    )
}
