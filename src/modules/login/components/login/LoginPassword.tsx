import { Form, Input } from 'antd'

export const LoginPassword: React.FC = () => {
    return (
        <Form.Item name='password' rules={[{ required: true, message: 'Please input your password!' }]}>
            <Input.Password className='w-[220px]' placeholder='password' />
        </Form.Item>
    )
}
