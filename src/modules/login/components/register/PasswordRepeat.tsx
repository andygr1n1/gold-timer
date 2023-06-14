import { Form, Input } from 'antd'
import { useState } from 'react'

export const PasswordRepeat: React.FC<{ password: string }> = ({ password }) => {
    const [repeatPassword, setRepeatPassword] = useState('')
    const [error, setError] = useState(false)

    return (
        <div className='relative'>
            <Form.Item
                name='passwordRepeat'
                rules={[{ required: true, message: 'Please confirm your password!' }]}
                validateStatus={error && !!repeatPassword.length ? 'error' : undefined}
            >
                <Input.Password
                    className='w-[220px]'
                    value={repeatPassword}
                    onChange={(e) => {
                        setError(false)
                        setRepeatPassword(e.target.value)
                    }}
                    placeholder='Confirm password'
                    onBlur={() => {
                        if (password !== repeatPassword) {
                            setError(true)
                        } else {
                            setError(false)
                        }
                    }}
                />
            </Form.Item>
            {error && !!repeatPassword.length && (
                <div className='absolute bottom-[2px] text-red-500'>Passwords don't match</div>
            )}
        </div>
    )
}
