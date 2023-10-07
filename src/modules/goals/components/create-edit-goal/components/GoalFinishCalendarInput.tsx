import { useGoalsStore } from '@/StoreProvider'
import { observer } from 'mobx-react-lite'
import { XDatePicker } from '@/components-x/x-date-picker/XDatePicker'
import { format, getYear, sub } from 'date-fns'
import { FormLabel } from '@/components/form/FormLabel'

export const GoalFinishCalendarInput: React.FC = observer(() => {
    const { new_goal } = useGoalsStore()
    if (!new_goal) return null

    const { onChangeField, finished_at, view_mode, edit_mode, created_at } = new_goal

    function onDatePickerChange(day: Date | undefined) {
        onChangeField('finished_at', day || undefined)
    }

    function onClear() {
        onChangeField('finished_at', undefined)
    }

    if (edit_mode) return null
    const disabledDays = [{ from: new Date(2022, 1, 1), to: sub(new Date(Date.now()), { days: 1 }) }]
    // dd.MM.yyyy
    return (
        <div>
            <FormLabel title='Finish Estimation' />
            {created_at && <div className='mb-2 font-extralight'>Created at {format(created_at, 'do MMMM yyyy')}</div>}
            <XDatePicker
                numberOfMonths={1}
                mode='single'
                selected={finished_at || undefined}
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
            />
        </div>
    )
})
