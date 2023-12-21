import { XInput } from '@/components-x/x-input/XInput'
import { Form } from 'antd'

export const LoginPassword: React.FC = () => {
    return (
        <Form.Item name='password' rules={[{ required: true, message: '* required' }]}>
            <XInput className='w-[220px]' placeholder='****' type='password' />
        </Form.Item>
    )
}
