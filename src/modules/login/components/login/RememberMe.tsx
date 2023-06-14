import { Checkbox, Form } from 'antd'
import { observer } from 'mobx-react-lite'

export const RememberMe: React.FC = observer(() => {
    return (
        <Form.Item name='remember' valuePropName='checked'>
            <Checkbox>Remember me</Checkbox>
        </Form.Item>
    )
})
