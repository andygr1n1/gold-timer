import { useUserStore } from '@/StoreProvider'
import { Button, Checkbox, Form, Input, notification } from 'antd'
import { observer } from 'mobx-react-lite'
import { IValues } from './helpers/login.interface'
import { sendLoginData } from './helpers/sendLoginData.helper'
import { setRememberUserCookie } from '@/helpers/universalCookie.helper'

export const LoginIndex: React.FC = observer(() => {
    const { onChangeField } = useUserStore()
    const [api, contextHolder] = notification.useNotification()

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
        <>
            {contextHolder}
            <div className='flex h-full w-full items-center justify-center text-cText'>
                <div className='rounded-lg bg-global-2-bg p-5 pt-12'>
                    <div className='m-auto flex items-center justify-center py-10 font-satisfy text-[100px]'>
                        <span className='text-[#BBDED6]'>K</span>
                        <span className='text-blue-400'>Zen</span>
                    </div>
                    <Form
                        name='kzen-login'
                        initialValues={{ remember: true }}
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                        autoComplete='on'
                        size='large'
                        className='!m-0 flex !h-fit flex-col gap-5 !p-0 !text-cText'
                    >
                        <Form.Item
                            className='form-field-email'
                            label='Email'
                            name='email'
                            rules={[{ required: true, message: 'Please input your username!' }]}
                        >
                            <Input className='w-[220px]' />
                        </Form.Item>

                        <Form.Item
                            label='Password'
                            name='password'
                            rules={[{ required: true, message: 'Please input your password!' }]}
                        >
                            <Input.Password className='w-[220px]' />
                        </Form.Item>

                        <div>
                            <Form.Item name='remember' valuePropName='checked' wrapperCol={{ offset: 8, span: 10 }}>
                                <Checkbox>Remember me</Checkbox>
                            </Form.Item>
                            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                                <Button type='primary' htmlType='submit'>
                                    Submit
                                </Button>
                            </Form.Item>
                        </div>
                    </Form>
                </div>
            </div>
        </>
    )
})
