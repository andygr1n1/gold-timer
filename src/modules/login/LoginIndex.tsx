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
import { processError } from '@/functions/processMessage'
import { useAtom } from 'jotai'
import { fetchData } from '@/functions/fetchData'
import { loginAtom } from './stores/login.store'

export const LoginIndex: React.FC = observer(() => {
    const { isDesktop } = useWindowMatchMedia(['isDesktop'])
    const [, setLogin] = useAtom(loginAtom)

    const onFinish = async (values: IValues) => {
        const errorString = 'Please try again. Your credentials are wrong'
        await fetchData<void, void>(
            () =>
                sendLoginData(values).then((res) => {
                    if (!res) throw new Error(errorString)
                    setLogin(() => ({
                        user_id: res.user_id,
                        remember: res.remember,
                    }))

                    res.remember && setRememberUserCookie(res.user_id)
                }),
            () => {
                processError(errorString)
                return []
            },
        )
    }

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
