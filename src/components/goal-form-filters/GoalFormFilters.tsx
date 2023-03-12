import { RdDatePicker } from '@/components-antd-redesign/rd-datepicker/DatePickerFns'
import { useGoalsStore } from '@/StoreProvider'
import { Input } from 'antd'
import { observer } from 'mobx-react-lite'

export const GoalFormFilters: React.FC = observer(() => {
    const {
        filter$: { onChangeField, goals_input_filter, goals_estimation_filter },
    } = useGoalsStore()

    const onDatePickerChange = (value: Date | null /* , dateString: string */) => {
        onChangeField('goals_estimation_filter', value ?? undefined)
        return value
    }

    return (
        <div className='flex  items-center justify-center gap-2'>
            <Input
                value={goals_input_filter}
                placeholder='find your goal...'
                onChange={(e) => onChangeField('goals_input_filter', e.target.value)}
                size='large'
                allowClear
            />
            <RdDatePicker
                popupClassName='creator-form-finished-date'
                onChange={onDatePickerChange}
                value={goals_estimation_filter}
                format='Do MMMM YYYY'
                className='!w-full'
                placeholder='estimation'
            />
        </div>
    )
})
