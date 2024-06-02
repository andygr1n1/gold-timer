import { XInput } from '@/components-x/x-input/XInput'
import { Form } from 'antd'
import { observer } from 'mobx-react-lite'

export const LoginEmail: React.FC = observer(() => {
    return (
        <Form.Item className='form-field-email' name='email' rules={[{ required: true, message: '* required' }]}>
            <XInput className='w-[220px]' placeholder='Email' />
        </Form.Item>
    )
})
