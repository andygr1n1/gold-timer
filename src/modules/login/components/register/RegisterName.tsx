import { XInput } from '@/components-x/x-input/XInput'
import { Form } from 'antd'

export const RegisterName: React.FC = () => {
    return (
        <Form.Item className='form-field-email' name='name' rules={[{ required: true, message: '* required' }]}>
            <XInput className='w-[220px]' placeholder='Name' />
        </Form.Item>
    )
}
