import { useUserStore } from '@/StoreProvider'
import { XInput } from '@/components-x/x-input/XInput'
import { observer } from 'mobx-react-lite'

export const EditPhone: React.FC = observer(() => {
    const { user_edit } = useUserStore()

    if (!user_edit) return null
    const { phone, onChangeField } = user_edit

    const onChangeNewPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = e.target.value.trim()
        onChangeField('phone', newValue)
    }

    return (
        <XInput
            className='w-[250px]'
            label='Phone'
            value={phone}
            onChange={onChangeNewPassword}
            type='number'
            placeholder='Set phone'
        />
    )
})
