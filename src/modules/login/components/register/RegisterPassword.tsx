import { Form, Input } from 'antd'
import { Dispatch, SetStateAction } from 'react'

export const RegisterPassword: React.FC<{ setPassword: Dispatch<SetStateAction<string>> }> = ({ setPassword }) => {
    return (
        <Form.Item name='password' rules={[{ required: true, message: 'Please input your password!' }]}>
            <Input.Password
                onChange={(e) => {
                    setPassword(e.target.value)
                }}
                className='w-[220px]'
                placeholder='Password'
            />
        </Form.Item>
    )
}
