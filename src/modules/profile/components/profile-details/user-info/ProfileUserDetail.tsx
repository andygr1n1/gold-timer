import { Input } from 'antd'
import { observer } from 'mobx-react-lite'

export const ProfileUserDetail: React.FC<{
    label: string
    value?: string
    disabled?: boolean
    defaultValue?: string
    onChange?: (newValue: string) => void
}> = observer(({ label, value, disabled, defaultValue = '', onChange }) => {
    return (
        <div className='flex items-center'>
            <span className='mr-2 w-16 text-sm'>{label}</span>
            <Input
                size='large'
                className='w-fit text-sm disabled:cursor-default disabled:bg-gray-200 disabled:text-gray-700'
                value={value}
                defaultValue={defaultValue}
                disabled={disabled}
                onChange={(e) => onChange?.(e.target.value)}
            />
        </div>
    )
})
