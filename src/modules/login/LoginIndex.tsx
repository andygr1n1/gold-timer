import { useUserStore } from '@/StoreProvider'
import { Form, notification } from 'antd'
import { observer } from 'mobx-react-lite'
import { IValues } from './helpers/login.interface'
import { sendLoginData } from './helpers/sendLoginData.helper'
import { setRememberUserCookie } from '@/helpers/universalCookie.helper'
import { useWindowMatchMedia } from '@/hooks/useMatchMedia.hook.'
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
import { is4G } from '@/functions/navigatorConnection'

export const LoginIndex: React.FC = observer(() => {
    const { onChangeField } = useUserStore()
    const [api, contextHolder] = notification.useNotification()
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
            api.info({
                message: `Login error`,
                description: 'Your credentials are wrong, Please try again',
                placement: 'top',
            })
        }
    }

    const onFinishFailed = () => {
        api.info({
            message: `Login error`,
            description: 'Please provide your credentials',
            placement: 'top',
        })
    }

    return (
        <div className={clsx([styles['login-bg'], is4G() && styles['login-4g']])}>
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
