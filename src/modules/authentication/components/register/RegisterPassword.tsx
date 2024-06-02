import { XInput } from '@/components-x/x-input/XInput'
import { Form } from 'antd'
import { Dispatch, SetStateAction } from 'react'

export const RegisterPassword: React.FC<{ setPassword: Dispatch<SetStateAction<string>> }> = ({ setPassword }) => {
    return (
        <Form.Item name='password' rules={[{ required: true, message: '* required' }]}>
            <XInput
                onChange={(e) => {
                    setPassword(e.target.value)
                }}
                className='w-[220px]'
                placeholder='****'
                type='password'
            />
        </Form.Item>
    )
}
