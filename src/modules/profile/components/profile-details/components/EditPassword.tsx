import { useUserStore } from '@/StoreProvider'
import { XInput } from '@/components-x/x-input/XInput'
import { observer } from 'mobx-react-lite'
import { useEffect, useState } from 'react'

export const EditPassword: React.FC = observer(() => {
    const { user_edit } = useUserStore()

    useEffect(() => {
        if (!user_edit) return
        const { fetchUserPassword } = user_edit
        fetchUserPassword()
    }, [])

    const [error, setError] = useState(false)

    if (!user_edit) return null
    const { password, repeat_password, new_password, onChangeField } = user_edit

    const onChangeNewPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = e.target.value.trim()
        onChangeField('new_password', newValue)
        if (newValue.length || repeat_password.length) {
            newValue === repeat_password && setError(false)
        } else {
            setError(false)
        }
    }

    const onChangeRepeatPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = e.target.value.trim()
        onChangeField('repeat_password', newValue)
        if (new_password.length || newValue.length) {
            if (new_password === newValue) setError(false)

            if (newValue.length >= new_password.length && new_password !== newValue) setError(true)
        } else {
            setError(false)
        }
    }

    return (
        <div>
            <XInput className='w-[250px]' disabled label='Old Password' value={password} />
            <XInput
                className='w-[250px]'
                label='New Password'
                value={new_password}
                onChange={onChangeNewPassword}
                error={error}
                errorMessage='Password must be the same'
                onBlur={() => {
                    if (repeat_password.length) {
                        new_password !== repeat_password && setError(true)
                    }
                }}
                placeholder='Set new password'
            />
            {!!new_password.length && (
                <XInput
                    className='animate-opacity-3 w-[250px]'
                    label='Repeat new password'
                    value={repeat_password}
                    onChange={onChangeRepeatPassword}
                    error={error}
                    errorMessage='Password must be the same'
                    onBlur={() => {
                        if (new_password.length || repeat_password.length) {
                            new_password !== repeat_password && setError(true)
                        }
                    }}
                    placeholder='Repeat new password'
                />
            )}
        </div>
    )
})
