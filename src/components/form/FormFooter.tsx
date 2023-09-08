import { XXButton } from '@/components-x/x-button/XButton'
import { Form } from 'antd'
import { observer } from 'mobx-react-lite'

export const FormFooter: React.FC<{
    disabled?: boolean
    okTitle?: string
    onOk: () => void
    onCancel: () => void
}> = observer(({ onCancel, onOk, okTitle = 'Ok', disabled = false }) => {
    return (
        <Form.Item>
            <div className='mt-10 flex w-full items-center justify-center gap-6'>
                <XXButton onClick={onCancel} type='primary' size='large' className='bg-x-red hover:!bg-rose-500/90'>
                    Cancel
                </XXButton>
                <XXButton disabled={disabled} type='primary' size='large' className='bg-x-ky' onClick={onOk}>
                    {okTitle}
                </XXButton>
            </div>
        </Form.Item>
    )
})
