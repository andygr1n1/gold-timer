import { useSprintsStore } from '@/StoreProvider'
import { XDayTimeSelector } from '@/components-x/x-date-picker/XDayTimeSelector'
import { Form } from 'antd'
import { set } from 'date-fns'
import { observer } from 'mobx-react-lite'

export const NewSprintStartDateIndex: React.FC = observer(() => {
    const { new_sprint } = useSprintsStore()
    if (!new_sprint) return null
    const { started_at, onChangeField } = new_sprint

    function disabledStartDate(current: Date) {
        return (
            current && current.valueOf() <= set(new Date(Date.now()), { hours: 0, minutes: 0, seconds: 0 })?.getTime()
        )
    }

    return (
        <Form.Item>
            <h5 className='!my-5'>Start date:</h5>
            <XDayTimeSelector
                onChange={(e) => onChangeField('started_at', e || undefined)}
                disabledDate={disabledStartDate}
                value={started_at}
            />
        </Form.Item>
    )
})
