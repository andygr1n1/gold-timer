import { XDatePicker } from '@/components-x/x-date-picker/XDatePicker'
import { format, getYear, parseISO, sub } from 'date-fns'
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

    const disabledDays = [{ from: new Date(2022, 1, 1), to: sub(new Date(Date.now()), { days: 1 }) }]

    return !hide ? (
        <div>
            <FormLabel title='Finish Estimation' />

            <XDatePicker
                numberOfMonths={1}
                mode='single'
                selected={parseISO(value) || undefined}
                onSelect={onDatePickerChange}
                dateFormat={'do MMMM yyyy'}
                captionLayout='dropdown-buttons'
                fromYear={getYear(new Date(Date.now()))}
                toYear={getYear(new Date(Date.now())) + 100}
                fixedWeeks
                showOutsideDays
                showWeekNumber
                ISOWeek
                onClear={onClear}
                placeholder='Set birthday'
                disabled={disabledDays}
                readOnly={view_mode}
                showToday
            />
        </div>
    ) : null
}
