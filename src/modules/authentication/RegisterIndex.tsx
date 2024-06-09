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
import { IconInfiniteLoading } from '@/assets/icons'

const RegisterIndex: React.FC = observer(() => {
    const navigate = useNavigate()
    const [, validate] = useAtom(validateUser)
    const { isDesktop } = useWindowMatchMedia(['isDesktop'])
    const [password, setPassword] = useState('')
    const [isLoading, setIsLoading] = useState(false)

    const onFinish = async (values: IRegisterValues) => {
        try {
            setIsLoading(true)
            if (values.password !== values.passwordRepeat) {
                throw new Error('Please provide right credentials, password is wrong')
            }

            const validateEmailRes = await validate()

            if (validateEmailRes !== 200) {
                throw new Error('Please provide right credentials, email is wrong')
            }

            const registerUserRes = await sendRegistrationData(values)
            console.log('registerUserRes', registerUserRes?.status, registerUserRes?.status === 'success')

            if (!registerUserRes) {
                processError('Register error')
            } else {
                navigate(`/${APP_ROUTES_ENUM.ACTIVATE_PENDING_REGISTERED_USER}?email=${values.email}`)
            }
        } catch (e) {
            processError(e)
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <Form
            name='kzen-register'
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={() => processError('Registration failed')}
            size={isDesktop ? 'large' : 'middle'}
            className='login-form'
        >
            {isLoading ? (
                <IconInfiniteLoading className='absolute-center text-blue-500 w-10 h-10 animate-pulse' />
            ) : (
                <>
                    <RegisterName />
                    <RegisterEmail />
                    <RegisterPassword setPassword={setPassword} />
                    <PasswordRepeat password={password} />
                    <LoginButton title={'Register'} />
                    <AlreadyHaveAccount />
                </>
            )}
        </Form>
    )
})

export default RegisterIndex
