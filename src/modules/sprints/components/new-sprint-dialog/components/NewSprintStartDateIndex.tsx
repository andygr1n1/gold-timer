import { useSprintsStore } from '@/StoreProvider'
import { XDayTimeSelector } from '@/components-x/x-date-picker/XDayTimeSelector'
import { Form } from 'antd'
import { format, set } from 'date-fns'
import { observer } from 'mobx-react-lite'
import { useState } from 'react'

export const NewSprintStartDateIndex: React.FC = observer(() => {
    const { new_sprint } = useSprintsStore()
    const [isFuture] = useState(new_sprint?.isStatusFuture)
    if (!new_sprint) return null
    const { started_at, onChangeField, edit_mode } = new_sprint

    // making isFuture immutable

    function disabledStartDate(current: Date) {
        return (
            current && current.valueOf() <= set(new Date(Date.now()), { hours: 0, minutes: 0, seconds: 0 })?.getTime()
        )
    }

    const disabled = edit_mode && !isFuture

    return (
        <Form.Item>
            <h5 className='!my-5'>Start date:</h5>
            {disabled && started_at ? (
                <div className='text-cText text-base'>{format(started_at, 'd MMMM yyyy')}</div>
            ) : (
                <XDayTimeSelector
                    onChange={(e) => onChangeField('started_at', e || undefined)}
                    disabledDate={disabledStartDate}
                    value={started_at}
                />
            )}
        </Form.Item>
    )
})
