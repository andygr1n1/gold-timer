import { Form } from 'antd'
import { observer } from 'mobx-react-lite'
import { XInput } from '@/components-x/x-input/XInput'
import { useAtom } from 'jotai'
import { registerAtom, registerEmailInUseError, validateUser } from '../../stores/register.store'

export const RegisterEmail: React.FC = observer(() => {
    const [{ register_email_input }, setRegAtom] = useAtom(registerAtom)
    const [emailInUseError] = useAtom(registerEmailInUseError)
    const [, validate] = useAtom(validateUser)

    return (
        <div className='relative'>
            <Form.Item className='form-field-email' name='email' rules={[{ required: true, message: '* required' }]}>
                <XInput
                    value={register_email_input}
                    onChange={(e) => {
                        setRegAtom((store) => {
                            store.register_email_input = e.target.value
                            store.register_email_in_use && (store.register_email_in_use = false)
                        })
                    }}
                    onBlur={() => {
                        validate()
                    }}
                    className='w-[220px]'
                    placeholder='@-email'
                />
            </Form.Item>
            {emailInUseError && <div className='absolute bottom-[2px] text-red-500'>Email is already in use</div>}
        </div>
    )
})
