import { observer } from 'mobx-react-lite'
import { AnonymousFooter } from './components/AnonymousFooter'
import { LoginContainer } from './components/LoginContainer'
import { LoginLogo } from './components/LoginLogo'
import { Form } from 'antd'
import { useWindowMatchMedia } from '@/hooks/useMatchMedia.hook'
import { IRestoreAccRes } from './helpers/login.interface'
import { AlreadyHaveAccount } from './components/AlreadyHaveAccount'
import { LoginButton } from './components/login/LoginButton'
import { LoginEmail } from './components/login/LoginEmail'
import { restoreAccount } from './helpers/restoreAccount.helper'
import styles from './LoginIndex.module.scss'
import clsx from 'clsx'
import { processNotificationApi } from '@/functions/processMessage'

export const RestoreAccountIndex: React.FC = observer(() => {
    const [form] = Form.useForm()

    const { isDesktop } = useWindowMatchMedia(['isDesktop'])

    const { contextHolder, processApiError, processApiSuccess } = processNotificationApi()

    const onFinishFailed = () => {
        processApiError({ title: 'Restore password error', description: "Email doesn't exist" })
    }

    const onFinish = async (values: IRestoreAccRes) => {
        const restorePasswordRes = await restoreAccount(values)
        if (!restorePasswordRes?.email) {
            onFinishFailed()
            return
        }
        processApiSuccess({
            title: 'Success!',
            description: 'Restore link was sent to your email. Please continue',
        })

        form.resetFields()
    }

    return (
        <div className={clsx([styles['login-bg'], styles['login-4g']])}>
            <LoginContainer>
                {contextHolder}
                <LoginLogo />
                <Form
                    form={form}
                    name='kzen-restore'
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    size={isDesktop ? 'large' : 'middle'}
                    className='login-form'
                >
                    <LoginEmail />
                    <LoginButton title={'Restore'} />
                    <AlreadyHaveAccount />
                </Form>
            </LoginContainer>
            <AnonymousFooter />
        </div>
    )
})
