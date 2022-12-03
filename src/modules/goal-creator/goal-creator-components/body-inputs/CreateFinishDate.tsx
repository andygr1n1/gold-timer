import { useRootStore } from '@/StoreProvider'
import { observer } from 'mobx-react-lite'
import { useState } from 'react'
import type { ValueType } from 'rc-input-number/lib/utils/MiniDecimal'
import { Divider, Switch } from 'antd'
import { RdInputNumber } from '@/components/rd/rd-inputs/RdInputNumber'
import { RdDatePicker } from '@/components/rd/rd-datepicker/DatePickerFns'
import { STATUS_ENUM } from '@/helpers/enums'

export const CreateFinishDate: React.FC = observer(() => {
    const {
        goals$: {
            new_goal: { freeze, estimation_days, onChangeField, status },
        },
    } = useRootStore()

    const [methodDatePicker, setMethodDate] = useState(false)

    const onDaysChange = (e: ValueType | null) => {
        onChangeField('estimation_days', Number(e) || 0)
        return e
    }

    const onSwitchMedthod = () => {
        setMethodDate(!methodDatePicker)

        if (!methodDatePicker) {
            onChangeField('estimation_days', 0)
        } else {
            onChangeField('estimation_days', 30)
        }
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
                    <Switch className='absolute w-5' onChange={onSwitchMedthod} />{' '}
                    <h3 className='pl-16'>Estimation: </h3>
                </div>
                {methodDatePicker ? (
                    <RdDatePicker
                        popupClassName='creator-form-finished-date'
                        onChange={onDatePickerChange}
                        showToday={false}
                        disabledDate={disabledDate}
                    />
                ) : (
                    <div className='flex items-center gap-5'>
                        <RdInputNumber
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
            <Divider />
        </>
    ) : null
})
