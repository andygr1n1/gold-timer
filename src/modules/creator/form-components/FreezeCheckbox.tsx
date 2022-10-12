import { useRootStore } from '@/StoreProvider'
import { Checkbox, Form } from 'antd'
import { observer } from 'mobx-react-lite'

export const FreezeCheckbox: React.FC = observer(() => {
    const {
        goals$: {
            goal_creator$: { freeze, onChangeField },
        },
    } = useRootStore()

    const onChange = () => {
        onChangeField('freeze', !freeze)
        return !freeze
    }

    return (
        <Form.Item label='Freeze' name='Freeze' getValueFromEvent={onChange}>
            <Checkbox checked={freeze} onChange={onChange} />
        </Form.Item>
    )
})
