import { useUserStore } from '@/StoreProvider'
import { XInput } from '@/components-x/x-input/XInput'
import { observer } from 'mobx-react-lite'

export const EditName: React.FC = observer(() => {
    const { user_edit } = useUserStore()

    if (!user_edit) return null
    const { name, onChangeField } = user_edit

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = e.target.value
        onChangeField('name', newValue)
    }

    return <XInput className='w-[250px]' label='Name' value={name} onChange={onChange} placeholder='Set name' />
})
