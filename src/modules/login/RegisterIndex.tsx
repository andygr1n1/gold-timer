import { useWindowMatchMedia } from '@/hooks/useMatchMedia.hook'
import { Form } from 'antd'
import { observer } from 'mobx-react-lite'
import { useState } from 'react'
import { IRegisterValues } from './helpers/login.interface'
import { sendRegistrationData } from './helpers/sendRegistrationData.helper'
import { RegisterEmail } from './components/register/RegisterEmail'
import { AnonymousFooter } from './components/AnonymousFooter'
import { LoginContainer } from './components/LoginContainer'
import { LoginLogo } from './components/LoginLogo'
import { AlreadyHaveAccount } from './components/AlreadyHaveAccount'
import { LoginButton } from './components/login/LoginButton'
import { PasswordRepeat } from './components/register/PasswordRepeat'
import { RegisterName } from './components/register/RegisterName'
import { RegisterPassword } from './components/register/RegisterPassword'
import clsx from 'clsx'
import styles from './LoginIndex.module.scss'
import { processError } from '@/functions/processMessage'
import { useAtom } from 'jotai'
import { validateUser } from './stores/register.store'
import { setRememberUserCookie } from '@/functions/universalCookie'
import { KEY_VerifyUserId } from '@/app/service/keys'

export const RegisterIndex: React.FC = observer(() => {
    const [, validate] = useAtom(validateUser)
    const { isDesktop } = useWindowMatchMedia(['isDesktop'])
    const [password, setPassword] = useState('')

    const onFinish = async (values: IRegisterValues) => {
        if (values.password !== values.passwordRepeat) {
            onFinishFailed()
            return
        }
        const validateEmailRes = await validate()

        if (validateEmailRes !== 200) {
            onFinishFailed()
            return
        }

        const registerUserRes = await sendRegistrationData(values)
        if (registerUserRes) {
            // set cookie
            setRememberUserCookie(registerUserRes.user_id, true)
            window.queryClient.setQueryData(KEY_VerifyUserId(), () => {
                return registerUserRes.user_id
            })
        }

        if (!registerUserRes) {
            processError('Login error your credentials are wrong, Please try again')
        }
    }

    const onFinishFailed = () => processError('Registration error please provide right credentials')

    return (
        <div className={clsx([styles['login-bg']], 'login-bg-4g')}>
            <LoginContainer>
                <LoginLogo />
                <Form
                    name='kzen-register'
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    size={isDesktop ? 'large' : 'middle'}
                    className='login-form '
                >
                    <RegisterName />
                    <RegisterEmail />
                    <RegisterPassword setPassword={setPassword} />
                    <PasswordRepeat password={password} />
                    <LoginButton title={'Register'} />
                    <AlreadyHaveAccount />
                </Form>
            </LoginContainer>

            <AnonymousFooter />
        </div>
    )
})
