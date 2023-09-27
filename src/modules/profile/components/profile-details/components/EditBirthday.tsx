import { useUserStore } from '@/StoreProvider'
import { XDatePicker } from '@/components-x/x-date-picker/XDatePicker'
import { getYear } from 'date-fns'
import { observer } from 'mobx-react-lite'

export const EditBirthday: React.FC = observer(() => {
    const { user_edit } = useUserStore()
    if (!user_edit) return null
    const { birthday, onChangeField } = user_edit

    function onSelectBirthday(day: Date | undefined) {
        onChangeField('birthday', day || null)
    }

    function onClearBirthday() {
        onChangeField('birthday', null)
    }

    return (
        <XDatePicker
            numberOfMonths={1}
            mode='single'
            selected={birthday || undefined}
            onSelect={onSelectBirthday}
            dateFormat={'dd.MM.yyyy'}
            label='Birthday'
            captionLayout='dropdown-buttons'
            fromYear={getYear(new Date(Date.now())) - 100}
            toYear={getYear(new Date(Date.now())) - 5}
            fixedWeeks
            showOutsideDays
            showWeekNumber
            ISOWeek
            onClear={onClearBirthday}
            placeholder='Set birthday'
        />
    )
})
