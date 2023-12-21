import { observer } from 'mobx-react-lite'
import { LoginContainer } from './components/LoginContainer'
import { LoginLogo } from './components/LoginLogo'
import { Button, Form } from 'antd'
import { LoginButton } from './components/login/LoginButton'
import { AnonymousFooter } from './components/AnonymousFooter'
import { useWindowMatchMedia } from '@/hooks/useMatchMedia.hook'
import { PasswordRepeat } from './components/register/PasswordRepeat'
import { useState } from 'react'
import { RegisterPassword } from './components/register/RegisterPassword'
import { getCodeFromUrlParams } from '@/functions/urlSearchParams'
import { fetchEmailByRestoreCode } from '@/graphql/queries/fetchEmailByRestoreCode.query'
import { updatePasswordByEmail } from '@/graphql/mutations/updatePasswordByEmail.mutation'
import { NavLink } from 'react-router-dom'
import { APP_ROUTES_ENUM } from '@/helpers/enums'
import { deleteRestoreCode } from '@/graphql/mutations/deleteRestoreCode.mutation'
import { processNotificationApi } from '@/functions/processError.helper'

export const NewPasswordIndex: React.FC = observer(() => {
    const { isDesktop } = useWindowMatchMedia(['isDesktop'])
    const [password, setPassword] = useState('')
    const { contextHolder, processApiSuccess, processApiError } = processNotificationApi()
    const [userStatus, setUserStatus] = useState<'login' | 'restore' | null>(null)

    const onFinish = async (values: { password: string; passwordRepeat: string }) => {
        if (values.password !== values.passwordRepeat) {
            onFinishFailed("Passwords didn't match")
            return
        }

        const code = getCodeFromUrlParams()
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

        const success = await updatePasswordByEmail(emailRes, values.password)

        if (success) {
            setUserStatus('login')
            deleteRestoreCode(code)
            processApiSuccess({
                title: 'Success!',
                description: 'Password has been successfully changed, please login',
            })
        } else {
            onFinishFailed('Token has been expired, please create a new one')
            setUserStatus('restore')
            return
        }
    }

    const onFinishFailed = (info = '') => {
        processApiError({
            title: `Restore password error`,
            description: info,
        })
    }

    return (
        <div className='flex h-full w-full flex-col '>
            <LoginContainer>
                {contextHolder}
                <LoginLogo />
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
            </LoginContainer>
            <AnonymousFooter />
        </div>
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
