import { useWindowMatchMedia } from '@/hooks/useMatchMedia.hook'
import { Form } from 'antd'
import { observer } from 'mobx-react-lite'
import { useState } from 'react'
import { IRegisterValues } from './helpers/login.interface'
import { sendRegistrationData } from './helpers/sendRegistrationData.helper'
import { RegisterEmail } from './components/register/RegisterEmail'
import { AlreadyHaveAccount } from './components/AlreadyHaveAccount'
import { LoginButton } from './components/login/LoginButton'
import { PasswordRepeat } from './components/register/PasswordRepeat'
import { RegisterName } from './components/register/RegisterName'
import { RegisterPassword } from './components/register/RegisterPassword'
import { processError } from '@/functions/processMessage'
import { useAtom } from 'jotai'
import { validateUser } from './stores/register.store'
import { useNavigate } from 'react-router-dom'
import { APP_ROUTES_ENUM } from '@/helpers/globalEnums'

export const RegisterIndex: React.FC = observer(() => {
    const navigate = useNavigate()
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
        console.log('registerUserRes', registerUserRes?.status, registerUserRes?.status === 'success')

        if (!registerUserRes) {
            processError('Register error')
        } else {
            navigate(`/${APP_ROUTES_ENUM.ACTIVATE_PENDING_REGISTERED_USER}?email=${values.email}`)
        }
    }

    const onFinishFailed = () => processError('Registration error please provide right credentials')

    return (
        <Form
            name='kzen-register'
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            size={isDesktop ? 'large' : 'middle'}
            className='login-form'
        >
            <RegisterName />
            <RegisterEmail />
            <RegisterPassword setPassword={setPassword} />
            <PasswordRepeat password={password} />
            <LoginButton title={'Register'} />
            <AlreadyHaveAccount />
        </Form>
    )
})
