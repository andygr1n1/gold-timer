import { XDatePicker } from '@/components-x/x-date-picker/XDatePicker'
import { format, getYear, set } from 'date-fns'
import { FormLabel } from '@/components/form/FormLabel'

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
                /* picker is converting date automatically by UTC */
                selected={set(value.replace(/Z|[\+\-]\d\d:\d\d$/gi, ''), { hours: 23, minutes: 59, seconds: 59 })}
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
                placeholder='Set birthday'
                readOnly={view_mode}
                showToday
            />
        </div>
    ) : null
}
