import { useRootStore } from '@/StoreProvider'
import { Form, InputNumber, Switch } from 'antd'
import { observer } from 'mobx-react-lite'
import { useState } from 'react'
import type { ValueType } from 'rc-input-number/lib/utils/MiniDecimal'
import DatePickerFns from '@/components/antd-date-fns/DatePickerFns'

export const FinishDate: React.FC = observer(() => {
    const {
        goals$: {
            new_goal$: { freeze },
        },
    } = useRootStore()

    const [methodDate, setMethodDate] = useState(false)
    const [days, setDays] = useState(30)

    const onDaysChange = (e: ValueType | null) => {
        setDays(Number(e) || 0)
        return e
    }

    const onDatePickerChange = (value: Date | null /* , dateString: string */) => {
        return value
    }

    function disabledDate(current: Date) {
        // Can not select days before today and today
        return current && current.valueOf() < Date.now()
    }

    return !freeze ? (
        <>
            <Form.Item label='Date | Days'>
                <Switch onChange={() => setMethodDate(!methodDate)} />
            </Form.Item>
            {methodDate ? (
                <Form.Item
                    label='Finish Date'
                    name='FinishDate'
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <DatePickerFns
                        popupClassName='creator-form-finished-date'
                        onChange={onDatePickerChange}
                        showToday={false}
                        disabledDate={disabledDate}
                    />
                </Form.Item>
            ) : (
                <Form.Item
                    label='Days'
                    name='Days'
                    getValueFromEvent={onDaysChange}
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <InputNumber min={1} max={33000} keyboard={true} value={days} onChange={onDaysChange} />
                </Form.Item>
            )}
        </>
    ) : null
})
