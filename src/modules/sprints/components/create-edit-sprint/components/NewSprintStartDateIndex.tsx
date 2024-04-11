import { useSprintsStore } from '@/app/StoreProvider'
import { XDatePicker } from '@/components-x/x-date-picker/XDatePicker'
import { FormLabel } from '@/components/form/FormLabel'
import { getYear, sub } from 'date-fns'
import { observer } from 'mobx-react-lite'
import { useState } from 'react'

export const NewSprintStartDateIndex: React.FC = observer(() => {
    const { new_sprint } = useSprintsStore()
    const [isFuture] = useState(new_sprint?.isStatusFuture)
    if (!new_sprint) return null
    const { started_at, onChangeField, edit_mode } = new_sprint

    const disabled = edit_mode && !isFuture

    const disabledDays = [{ from: new Date(2022, 1, 1), to: sub(new Date(Date.now()), { days: 1 }) }]

    function onDatePickerChange(day: Date | undefined) {
        onChangeField('started_at', day || undefined)
    }

    function onClear() {
        onChangeField('started_at', undefined)
    }

    return (
        <div>
            <FormLabel title='Start date:' />

            <XDatePicker
                numberOfMonths={1}
                mode='single'
                selected={started_at || undefined}
                onSelect={onDatePickerChange}
                dateFormat={'do MMMM yyyy'}
                captionLayout='dropdown-buttons'
                fromYear={getYear(new Date(Date.now()))}
                toYear={getYear(new Date(Date.now())) + 1}
                fixedWeeks
                showOutsideDays
                showWeekNumber
                ISOWeek
                onClear={onClear}
                placeholder='Set birthday'
                disabled={disabledDays}
                readOnly={disabled}
                showToday
            />
        </div>
    )
})
