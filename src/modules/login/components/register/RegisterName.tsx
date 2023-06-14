import { Form, Input } from 'antd'

export const RegisterName: React.FC = () => {
    return (
        <Form.Item
            className='form-field-email'
            name='name'
            rules={[{ required: true, message: 'Please input your username!' }]}
        >
            <Input className='w-[220px]' placeholder='Name' />
        </Form.Item>
    )
}
