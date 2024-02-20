import { XInput } from '@/components-x/x-input/XInput'
import { FormLabel } from '@/components/form/FormLabel'
import { editProfile$_Phone } from '@/modules/profile/stores/editProfile.store'
import { useAtom } from 'jotai'

export const EditPhone: React.FC = () => {
    const [phone, setPhone] = useAtom(editProfile$_Phone)

    const onChangeNewPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = e.target.value.trim()
        setPhone(newValue)
    }

    return (
        <div>
            <FormLabel title='Phone' />
            <XInput value={phone} onChange={onChangeNewPassword} type='number' placeholder='Set phone' />
        </div>
    )
}
