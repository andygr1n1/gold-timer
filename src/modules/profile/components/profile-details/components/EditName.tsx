import { useUserStore } from '@/StoreProvider'
import { XInput } from '@/components-x/x-input/XInput'
import { FormLabel } from '@/components/form/FormLabel'
import { observer } from 'mobx-react-lite'

export const EditName: React.FC = observer(() => {
    const { user_edit } = useUserStore()

    if (!user_edit) return null
    const { name, onChangeField } = user_edit

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = e.target.value
        onChangeField('name', newValue)
    }

    return (
        <div>
            <FormLabel title={'Name'} />
            <XInput value={name} onChange={onChange} placeholder='Set name' />
        </div>
    )
})
