import { XDatePicker } from '@/components-x/x-date-picker/XDatePicker'
import { format, getYear } from 'date-fns'
import { FormLabel } from '@/components/form/FormLabel'
import { setMidnightTime } from '@/functions/date.helpers'

export const GoalFinishCalendarInput: React.FC<{
    value: string
    view_mode?: boolean
    hide?: boolean
    onChange?: (value: string) => void
}> = ({ value, view_mode, hide = false, onChange }) => {
    function onDatePickerChange(day: Date | undefined) {
        day && onChange?.(format(day, 'yyyy-MM-dd') || '')
    }
    function onClear() {
        onChange?.('')
    }
    return !hide ? (
        <div>
            <FormLabel title='Finish Estimation' />

            <XDatePicker
                numberOfMonths={1}
                mode='single'
                selected={setMidnightTime(new Date(value))}
                onSelect={onDatePickerChange}
                dateFormat={'do MMMM yyyy'}
                captionLayout='dropdown-buttons'
                fromYear={getYear(new Date(Date.now())) - 25}
                toYear={getYear(new Date(Date.now())) + 100}
                fixedWeeks
                showOutsideDays
                showWeekNumber
                ISOWeek
                onClear={onClear}
                placeholder='Set birthday'
                readOnly={view_mode}
                showToday
            />
        </div>
    ) : null
}
