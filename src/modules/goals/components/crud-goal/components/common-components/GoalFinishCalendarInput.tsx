import { observer } from 'mobx-react-lite'
import { XDatePicker } from '@/components-x/x-date-picker/XDatePicker'
import { getYear, sub } from 'date-fns'
import { FormLabel } from '@/components/form/FormLabel'
import { IGoal$ } from '@/modules/goals/mst/types'

export const GoalFinishCalendarInput: React.FC<{ goal: IGoal$; view_mode?: boolean; hide?: boolean }> = observer(
    ({ goal, view_mode, hide = false }) => {
        const { onChangeField, finished_at } = goal

        function onDatePickerChange(day: Date | undefined) {
            onChangeField('finished_at', day || undefined)
        }

        function onClear() {
            onChangeField('finished_at', undefined)
        }

        const disabledDays = [{ from: new Date(2022, 1, 1), to: sub(new Date(Date.now()), { days: 1 }) }]
        // dd.MM.yyyy
        return !hide ? (
            <div>
                <FormLabel title='Finish Estimation' />

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
                    showToday
                />
            </div>
        ) : null
    },
)
