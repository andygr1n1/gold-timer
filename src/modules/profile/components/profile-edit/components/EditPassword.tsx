import { XInput } from '@/components-x/x-input/XInput'
import { FormLabel } from '@/components/form/FormLabel'
import {
    editProfile$_NewPassword,
    editProfile$_Password,
    editProfile$_RepeatPassword,
} from '@/modules/profile/stores/editProfile.store'
import { useAtom } from 'jotai'
import { observer } from 'mobx-react-lite'
import { useState } from 'react'

export const EditPassword: React.FC = observer(() => {
    const [_password] = useAtom(editProfile$_Password)
    const [_newPassword, _setNewPassword] = useAtom(editProfile$_NewPassword)
    const [_repeatPassword, _setRepeatPassword] = useAtom(editProfile$_RepeatPassword)

    const [error, setError] = useState(false)

    const onChangeNewPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = e.target.value.trim()
        _setNewPassword(newValue)
        if (newValue.length || _repeatPassword?.length) {
            newValue === _repeatPassword && setError(false)
        } else {
            setError(false)
        }
    }

    const onChangeRepeatPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = e.target.value.trim()
        _setRepeatPassword(newValue)
        if (_newPassword?.length || newValue.length) {
            if (_newPassword === newValue) setError(false)

            if (newValue.length >= (_newPassword?.length || 0) && _newPassword !== newValue) setError(true)
        } else {
            setError(false)
        }
    }

    return (
        <div className='flex flex-col gap-5'>
            <div>
                <FormLabel title={'Old Password'} />
                <XInput disabled value={_password} />
            </div>
            <div>
                <FormLabel title={'New Password'} />
                <XInput
                    value={_newPassword}
                    onChange={onChangeNewPassword}
                    error={error}
                    errorMessage='Password must be the same'
                    onBlur={() => {
                        if (_repeatPassword?.length) {
                            _newPassword !== _repeatPassword && setError(true)
                        }
                    }}
                    placeholder='Set new password'
                />
            </div>

            <div className='h-[70px]'>
                {!!_newPassword?.length && (
                    <div>
                        <FormLabel title={'Repeat new password'} />
                        <XInput
                            className='animate-opacity-3'
                            value={_repeatPassword}
                            onChange={onChangeRepeatPassword}
                            error={error}
                            errorMessage='Password must be the same'
                            onBlur={() => {
                                if (_newPassword?.length || _repeatPassword?.length) {
                                    _newPassword !== _repeatPassword && setError(true)
                                }
                            }}
                            placeholder='Repeat new password'
                        />
                    </div>
                )}
            </div>
        </div>
    )
})
