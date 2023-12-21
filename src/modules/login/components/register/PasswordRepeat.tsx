import { XInput } from '@/components-x/x-input/XInput'
import { Form } from 'antd'
import { useState } from 'react'

export const PasswordRepeat: React.FC<{ password: string }> = ({ password }) => {
    const [repeatPassword, setRepeatPassword] = useState('')
    const [error, setError] = useState(false)

    return (
        <div className='relative'>
            <Form.Item
                name='passwordRepeat'
                rules={[{ required: true, message: '* required' }]}
                validateStatus={error && !!repeatPassword.length ? 'error' : undefined}
            >
                <XInput
                    className='w-[220px]'
                    value={repeatPassword}
                    onChange={(e) => {
                        setError(false)
                        setRepeatPassword(e.target.value)
                    }}
                    placeholder='****'
                    onBlur={() => {
                        if (password !== repeatPassword) {
                            setError(true)
                        } else {
                            setError(false)
                        }
                    }}
                    type='password'
                />
            </Form.Item>
            {error && !!repeatPassword.length && (
                <div className='absolute bottom-[2px] text-red-500'>passwords don't match</div>
            )}
        </div>
    )
}
