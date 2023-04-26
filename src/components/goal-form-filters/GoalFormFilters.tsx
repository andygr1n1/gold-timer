import { DatePickerFns } from '@/components-rd/rddatepicker/RdDatePicker'
import { useGoalsStore } from '@/StoreProvider'
import { Input } from 'antd'
import { observer } from 'mobx-react-lite'
import { useEffect } from 'react'
import { add } from 'date-fns'

export const GoalFormFilters: React.FC = observer(() => {
    const {
        filter$: {
            onChangeField,
            goals_input_filter,
            goals_estimation_filter,
            goalsCollapseData: { isFavorite },
        },
    } = useGoalsStore()

    const onDatePickerChange = (value: Date | null /* , dateString: string */) => {
        onChangeField('goals_estimation_filter', value ?? undefined)
        return value
    }

    useEffect(() => {
        !isFavorite && onChangeField('goals_estimation_filter', add(new Date(Date.now()), { days: 60 }))
        isFavorite && onChangeField('goals_estimation_filter', undefined)
    }, [])

    return (
        <div className='flex  items-center justify-center gap-2'>
            <Input
                value={goals_input_filter}
                placeholder='find your goal...'
                onChange={(e) => onChangeField('goals_input_filter', e.target.value)}
                size='large'
                allowClear
                autoFocus={false}
                tabIndex={-1}
            />
            <DatePickerFns
                size='large'
                onChange={onDatePickerChange}
                value={goals_estimation_filter}
                format='Do MMMM YYYY'
                className='!w-full'
                placeholder='estimation'
                tabIndex={-1}
            />
        </div>
    )
})
