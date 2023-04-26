import { DatePickerFns } from '@/components-rd/rddatepicker/RdDatePicker'
import { RdInput } from '@/components-rd/rdinput/RdInput'
import { useGoalsStore } from '@/StoreProvider'
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
                    // <DatePickerFns
                    //     className='!w-full'
                    //     onChange={(e) => onChangeField('finished_at', e || undefined)}
                    //     disabledDate={disabledDate}
                    //     showTime
                    //     value={finished_at}
                    //     format='Do MMMM YYYY HH:mm:ss '
                    // />
                    <div className='flex flex-col gap-5 2xl:flex-row'>
                        <DatePickerFns
                            size='large'
                            onChange={(e) => onChangeField('finished_at', e || undefined)}
                            disabledDate={disabledDate}
                            value={finished_at}
                            format='Do MMMM YYYY  '
                            className='!w-full'
                        />
                        <DatePickerFns
                            picker='time'
                            size='large'
                            onChange={(e) => onChangeField('finished_at', e || undefined)}
                            disabledDate={disabledDate}
                            value={finished_at}
                            format=' HH:mm'
                            className='w-full 2xl:w-[150px]'
                            minuteStep={15}
                            showNow={false}
                        />
                    </div>
                )}
            </div>
        </>
    )
})
