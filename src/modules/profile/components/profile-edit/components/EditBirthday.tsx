import { XDatePicker } from '@/components-x/x-date-picker/XDatePicker'
import { convertDateToString, convertStringDate } from '@/functions/date.helpers'
import { editProfile$_Birthday } from '@/modules/profile/stores/editProfile.store'
import { getYear } from 'date-fns'
import { useAtom } from 'jotai'

export const EditBirthday: React.FC = () => {
    const [birthday, setBirthday] = useAtom(editProfile$_Birthday)

    function onDatePickerChange(day: Date | undefined) {
        day && setBirthday(convertDateToString(day) || '')
    }
    function onClear() {
        setBirthday('')
    }

    return (
        <XDatePicker
            numberOfMonths={1}
            mode='single'
            selected={birthday ? convertStringDate(birthday) : undefined}
            onSelect={onDatePickerChange}
            dateFormat={'dd.MM.yyyy'}
            label='Birthday'
            captionLayout='dropdown-buttons'
            fromYear={getYear(new Date(Date.now())) - 100}
            toYear={getYear(new Date(Date.now())) + 2}
            fixedWeeks
            showOutsideDays
            showWeekNumber
            ISOWeek
            onClear={onClear}
            placeholder='Set birthday'
            showToday
        />
    )
}
