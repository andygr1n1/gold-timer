import { useUserStore } from '@/StoreProvider'
import { Form } from 'antd'
import { observer } from 'mobx-react-lite'
import { IValues } from './helpers/login.interface'
import { sendLoginData } from './helpers/sendLoginData.helper'
import { setRememberUserCookie } from '@/functions/universalCookie.helper'
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
import { processNotificationApi } from '@/functions/processMessage'

export const LoginIndex: React.FC = observer(() => {
    const { onChangeField } = useUserStore()
    const { processApiError, contextHolder } = processNotificationApi()
    const { isDesktop } = useWindowMatchMedia(['isDesktop'])

    const onFinish = async (values: IValues) => {
        const loginUserRes = await sendLoginData(values)
        if (loginUserRes) {
            onChangeField('id', loginUserRes.user_id)
        }

        if (loginUserRes?.remember) {
            setRememberUserCookie(loginUserRes.user_id)
        }

        if (!loginUserRes) {
            processApiError({ title: 'Please try again', description: 'Your credentials are wrong' })
        }
    }

    const onFinishFailed = () => {
        processApiError({ title: 'Login error', description: 'Please provide your credentials' })
    }

    // const is4GConnection = is4G()
    return (
        //  <div className={clsx([styles['login-bg'], is4GConnection && styles['login-4g']])}>
        <div className={clsx([styles['login-bg']], 'login-bg-4g')}>
            <LoginContainer>
                {contextHolder}
                <LoginLogo />
                <Form
                    name='kzen-login'
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
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
