import { RdDatePicker } from '@/components-antd-redesign/rd-datepicker/DatePickerFns'
import { RdInput } from '@/components-antd-redesign/rd-inputs/RdInput'
import { useGoalsStore } from '@/StoreProvider'
import { Divider } from 'antd'
import { observer } from 'mobx-react-lite'

export const InputFinishedAt: React.FC = observer(() => {
    const { new_goal, is_creator_mode } = useGoalsStore()

    if (!new_goal) return null

    const { finished_at, onChangeField } = new_goal

    function disabledDate(current: Date) {
        // Can not select days before today and today
        return current && current.valueOf() < Date.now()
    }

    return (
        <>
            <div className='py-2'>
                <h5>Estimation: </h5>
                {!is_creator_mode ? (
                    <RdInput disabled value={finished_at?.toDateString()} />
                ) : (
                    <RdDatePicker
                        className='!w-full'
                        popupClassName='creator-form-finished-date'
                        onChange={(e) => onChangeField('finished_at', e || undefined)}
                        disabledDate={disabledDate}
                        showTime
                        value={finished_at}
                        format='Do MMMM YYYY HH:mm:ss '
                    />
                )}
            </div>
        </>
    )
})
