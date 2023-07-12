import { observer } from 'mobx-react-lite'
import { XDatePicker } from './XDatePicker'

export const XDayTimeSelector: React.FC<{
    disabledDate: (current: Date) => boolean
    onChange: (e: Date | null) => void
    value: Date | null | undefined
}> = observer(({ disabledDate, onChange, value }) => {
    return (
        <div className='flex flex-col gap-5 2xl:flex-row'>
            <XDatePicker
                size='large'
                onChange={onChange}
                disabledDate={disabledDate}
                value={value}
                format='Do MMMM YYYY'
                className='!w-full'
            />
            <XDatePicker
                picker='time'
                size='large'
                onChange={onChange}
                disabledDate={disabledDate}
                value={value}
                format=' HH:mm'
                className='w-full 2xl:w-[150px]'
                minuteStep={15}
                showNow={true}
            />
        </div>
    )
})
