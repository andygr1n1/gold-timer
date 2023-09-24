import { useWindowMatchMedia } from '@/hooks/useMatchMedia.hook.'
import { Form, notification } from 'antd'
import { observer } from 'mobx-react-lite'
import { useState } from 'react'
import { IRegisterValues } from './helpers/login.interface'
import { sendRegistrationData } from './helpers/sendRegistrationData.helper'
import { useUserStore } from '@/StoreProvider'
import { RegisterEmail } from './components/register/RegisterEmail'
import { AnonymousFooter } from './components/AnonymousFooter'
import { LoginContainer } from './components/LoginContainer'
import { useLoginStore } from './mst/LoginStoreProvider'
import { LoginLogo } from './components/LoginLogo'
import { AlreadyHaveAccount } from './components/AlreadyHaveAccount'
import { LoginButton } from './components/login/LoginButton'
import { PasswordRepeat } from './components/register/PasswordRepeat'
import { RegisterName } from './components/register/RegisterName'
import { RegisterPassword } from './components/register/RegisterPassword'
import clsx from 'clsx'
import styles from './LoginIndex.module.scss'

export const RegisterIndex: React.FC = observer(() => {
    const { onChangeField } = useUserStore()
    const {
        register_credentials: { validateEmail },
    } = useLoginStore()
    const [api, contextHolder] = notification.useNotification()
    const { isDesktop } = useWindowMatchMedia(['isDesktop'])
    const [password, setPassword] = useState('')

    const onFinishFailed = () => {
        api.info({
            message: `Registration error`,
            description: 'Please provide right credentials',
            placement: 'top',
        })
    }

    const onFinish = async (values: IRegisterValues) => {
        if (values.password !== values.passwordRepeat) {
            onFinishFailed()
            return
        }
        const validateEmailRes = await validateEmail()

        if (validateEmailRes !== 200) {
            onFinishFailed()
            return
        }

        const registerUserRes = await sendRegistrationData(values)
        if (registerUserRes) {
            onChangeField('id', registerUserRes.user_id)
        }

        if (!registerUserRes) {
            api.info({
                message: `Login error`,
                description: 'Your credentials are wrong, Please try again',
                placement: 'top',
            })
        }
    }

    return (
        <div className={clsx([styles['login-bg'], styles['login-4g']])}>
            <LoginContainer>
                {contextHolder}
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
