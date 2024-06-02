import { Form } from 'antd'
import { observer } from 'mobx-react-lite'
import { useWindowMatchMedia } from '@/hooks/useMatchMedia.hook'
import { LoginButton } from './components/login/LoginButton'
import { LoginEmail } from './components/login/LoginEmail'
import { LoginPassword } from './components/login/LoginPassword'
import { LoginFooter } from './components/login/LoginFooter'
import { processError } from '@/functions/processMessage'

import { sendLoginForm } from './helpers/sendLoginForm'
import { CustomGoogleLoginButton } from '@/components/CustomGoogleLoginButton'

export const LoginIndex: React.FC = observer(() => {
    const { isDesktop } = useWindowMatchMedia(['isDesktop'])

    const onFinishFailed = () => {
        processError('Login error, please provide your credentials')
    }

    return (
        <Form
            name='kzen-login'
            onFinish={sendLoginForm}
            onFinishFailed={onFinishFailed}
            autoComplete='on'
            size={isDesktop ? 'large' : 'middle'}
            className='login-form '
        >
            <LoginEmail />
            <LoginPassword />
            <LoginButton title={'Login'} />
            <LoginFooter />
            <div className='w-full h-full flex items-center justify-center'>
                <CustomGoogleLoginButton />
            </div>
        </Form>
    )
})
