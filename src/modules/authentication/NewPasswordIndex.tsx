import { observer } from 'mobx-react-lite'
import { Button, Form } from 'antd'
import { LoginButton } from './components/login/LoginButton'
import { useWindowMatchMedia } from '@/hooks/useMatchMedia.hook'
import { PasswordRepeat } from './components/register/PasswordRepeat'
import { useState } from 'react'
import { RegisterPassword } from './components/register/RegisterPassword'
import { getParam_Code } from '@/functions/urlSearchParams'
import { fetchEmailByRestoreCode } from '@/graphql/queries/fetchEmailByRestoreCode.query'
import { updatePasswordByEmail } from '@/graphql/mutations/updatePasswordByEmail.mutation'
import { NavLink } from 'react-router-dom'
import { APP_ROUTES_ENUM } from '@/helpers/globalEnums'
import { deleteRestoreCode } from '@/graphql/mutations/deleteRestoreCode.mutation'
import { processError, processSuccess } from '@/functions/processMessage'
import bcrypt from 'bcryptjs'

export const NewPasswordIndex: React.FC = observer(() => {
    const { isDesktop } = useWindowMatchMedia(['isDesktop'])
    const [password, setPassword] = useState('')
    const [userStatus, setUserStatus] = useState<'login' | 'restore' | null>(null)

    const onFinish = async (values: { password: string; passwordRepeat: string }) => {
        if (values.password !== values.passwordRepeat) {
            onFinishFailed("Passwords didn't match")
            return
        }

        const code = getParam_Code()
        if (!code) {
            onFinishFailed('Token has been expired, please create a new one')
            setUserStatus('restore')
            return
        }

        const emailRes = await fetchEmailByRestoreCode(code)

        if (!emailRes) {
            onFinishFailed('Token has been expired, please create a new one')
            setUserStatus('restore')
            return
        }

        const success = await updatePasswordByEmail(emailRes, bcrypt.hashSync(values.password, 10))

        if (success) {
            setUserStatus('login')
            deleteRestoreCode(code)
            processSuccess('Success! password has been successfully changed, please login')
        } else {
            onFinishFailed('Token has been expired, please create a new one')
            setUserStatus('restore')
            return
        }
    }

    const onFinishFailed = (info = '') => {
        processError(`Restore password error: ${info}`)
    }

    return (
        <>
            {!userStatus && (
                <Form
                    name='kzen-new-password'
                    initialValues={{ remember: false }}
                    onFinish={onFinish}
                    onFinishFailed={() => onFinishFailed('Please provide correct data')}
                    autoComplete='off'
                    size={isDesktop ? 'large' : 'middle'}
                    className='login-form'
                >
                    <div className='font-vi w-full cursor-default select-none py-5 text-center text-base font-bold'>
                        New password
                    </div>
                    <RegisterPassword setPassword={setPassword} />
                    <PasswordRepeat password={password} />
                    <LoginButton title={'Save'} />
                </Form>
            )}
            {userStatus === 'restore' && <BackToRestore />}
            {userStatus === 'login' && <BackToLogin />}
        </>
    )
})

const BackToLogin = () => {
    const { isDesktop } = useWindowMatchMedia(['isDesktop'])

    return (
        <div className='login-form  !h-[360px] !p-0 '>
            <NavLink to={`/${APP_ROUTES_ENUM.LOGIN}`}>
                <Button type='primary' size={isDesktop ? 'large' : 'middle'}>
                    Back to login
                </Button>
            </NavLink>
        </div>
    )
}

const BackToRestore = () => {
    const { isDesktop } = useWindowMatchMedia(['isDesktop'])

    return (
        <div className='login-form !h-[360px]'>
            <NavLink to={`/${APP_ROUTES_ENUM.RESTORE_ACCOUNT}`}>
                <Button type='primary' size={isDesktop ? 'large' : 'middle'}>
                    Restore your account
                </Button>
            </NavLink>
        </div>
    )
}
