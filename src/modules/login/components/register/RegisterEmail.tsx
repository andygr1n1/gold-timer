import { Form } from 'antd'
import { observer } from 'mobx-react-lite'
import { useLoginStore } from '../../mst/LoginStoreProvider'
import { XInput } from '@/components-x/x-input/XInput'

export const RegisterEmail: React.FC = observer(() => {
    const {
        register_credentials: {
            register_email_input,
            onChangeField,
            validateEmail,
            register_email_in_use,
            registerEmailInUseError,
        },
    } = useLoginStore()
    return (
        <div className='relative'>
            <Form.Item className='form-field-email' name='email' rules={[{ required: true, message: '* required' }]}>
                <XInput
                    value={register_email_input}
                    onChange={(e) => {
                        onChangeField('register_email_input', e.target.value)
                        if (register_email_in_use) {
                            onChangeField('register_email_in_use', false)
                        }
                    }}
                    onBlur={() => {
                        validateEmail()
                    }}
                    className='w-[220px]'
                    placeholder='@-email'
                />
            </Form.Item>
            {registerEmailInUseError && (
                <div className='absolute bottom-[2px] text-red-500'>Email is already in use</div>
            )}
        </div>
    )
})
