import { Form } from 'antd'
import { observer } from 'mobx-react-lite'
import { useWindowMatchMedia } from '@/hooks/useMatchMedia.hook'
import { LoginContainer } from './components/LoginContainer'
import { LoginLogo } from './components/LoginLogo'
import { AnonymousFooter } from './components/AnonymousFooter'
import { LoginButton } from './components/login/LoginButton'
import { RememberMe } from './components/login/RememberMe'
import { LoginEmail } from './components/login/LoginEmail'
import { LoginPassword } from './components/login/LoginPassword'
import { LoginFooter } from './components/login/LoginFooter'
import styles from './LoginIndex.module.scss'
import clsx from 'clsx'
import { processError } from '@/functions/processMessage'

import { sendLoginForm } from './helpers/sendLoginForm'

export const LoginIndex: React.FC = observer(() => {
    const { isDesktop } = useWindowMatchMedia(['isDesktop'])

    const onFinishFailed = () => {
        processError('Login error, please provide your credentials')
    }

    return (
        <div className={clsx([styles['login-bg']], 'login-bg-4g')}>
            <LoginContainer>
                <LoginLogo />
                <Form
                    name='kzen-login'
                    initialValues={{ remember: true }}
                    onFinish={sendLoginForm}
                    onFinishFailed={onFinishFailed}
                    autoComplete='on'
                    size={isDesktop ? 'large' : 'middle'}
                    className='login-form '
                >
                    <LoginEmail />
                    <LoginPassword />
                    <RememberMe />
                    <LoginButton title={'Login'} />
                    <LoginFooter />
                </Form>
            </LoginContainer>
            <AnonymousFooter />
        </div>
    )
})
