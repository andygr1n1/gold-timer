import { Form, Input } from 'antd'
import { observer } from 'mobx-react-lite'

export const LoginEmail: React.FC = observer(() => {
    return (
        <Form.Item
            className='form-field-email'
            name='email'
            rules={[{ required: true, message: 'Please input your username!' }]}
        >
            <Input className='w-[220px]' placeholder='@mail' />
        </Form.Item>
    )
})
