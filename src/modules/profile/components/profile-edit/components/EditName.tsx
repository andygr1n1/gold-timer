import { XInput } from '@/components-x/x-input/XInput'
import { FormLabel } from '@/components/form/FormLabel'
import { editProfile$_Name } from '@/modules/profile/stores/editProfile.store'
import { useAtom } from 'jotai'

export const EditName: React.FC = () => {
    const [name, setName] = useAtom(editProfile$_Name)

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = e.target.value
        setName(newValue)
    }

    return (
        <div>
            <FormLabel title={'Name'} />
            <XInput value={name} onChange={onChange} placeholder='Set name' />
        </div>
    )
}
