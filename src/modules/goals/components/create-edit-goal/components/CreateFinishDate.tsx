import { useRootStore } from '@/StoreProvider'
import { observer } from 'mobx-react-lite'
import { useState } from 'react'
import { InputNumber, Switch } from 'antd'
import { STATUS_ENUM } from '@/helpers/enums'
import type { ValueType } from '@rc-component/mini-decimal'
import { XDayTimeSelector } from '@/components-x/x-date-picker/XDayTimeSelector'

export const CreateFinishDate: React.FC = observer(() => {
    const {
        goals$: {
            new_goal: { freeze, estimation_days, onChangeField, status, finished_at },
        },
    } = useRootStore()

    const [methodDatePicker, setMethodDate] = useState(true)

    const onDaysChange = (e: ValueType | null) => {
        onChangeField('estimation_days', Number(e) || 0)
        return e
    }

    const onSwitchMethod = () => {
        setMethodDate((prev) => {
            const newState = !prev

            if (newState) {
                onChangeField('estimation_days', 0)
            } else {
                onChangeField('estimation_days', 30)
            }

            return newState
        })
    }

    const onDatePickerChange = (value: Date | null /* , dateString: string */) => {
        onChangeField('finished_at', value ?? undefined)
        return value
    }

    function disabledDate(current: Date) {
        // Can not select days before today and today
        return current && current.valueOf() < Date.now()
    }

    return !freeze && status !== STATUS_ENUM.FROZEN ? (
        <>
            <div>
                <div className='relative flex items-center justify-start gap-5 py-2'>
                    <Switch className='absolute w-5' checked={methodDatePicker} onChange={onSwitchMethod} />{' '}
                    <h5 className='pl-16'>Estimation: </h5>
                </div>
                {methodDatePicker ? (
                    <XDayTimeSelector onChange={onDatePickerChange} disabledDate={disabledDate} value={finished_at} />
                ) : (
                    <div className='flex items-center gap-4'>
                        <InputNumber
                            size='large'
                            min={1}
                            max={33000}
                            keyboard={true}
                            value={estimation_days}
                            onChange={onDaysChange}
                        />
                        {` days`}
                    </div>
                )}
            </div>
        </>
    ) : null
})
