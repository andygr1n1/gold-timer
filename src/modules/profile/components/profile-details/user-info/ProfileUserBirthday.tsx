import { XDatePicker } from '@/components-x/x-date-picker/XDatePicker'
import { observer } from 'mobx-react-lite'

export const ProfileUserBirthday: React.FC<{
    label: string
    value?: Date
    disabled?: boolean
    onChange?: (date: Date | null) => void
}> = observer(({ label, value, disabled, onChange }) => {
    return (
        <div className='flex items-center gap-1'>
            <span className='mr-2 w-16 text-sm'>{label}</span>
            <div
                className={`profile-date-picker flex w-full rounded-md text-sm  ${
                    disabled ? 'bg-gray-200 text-gray-700' : ''
                }`}
            >
                <XDatePicker
                    size='large'
                    className='w-full'
                    value={value}
                    disabled={disabled}
                    onChange={(e) => onChange?.(e)}
                    format={'DD.MM.YYYY'}
                />
            </div>
        </div>
    )
})
