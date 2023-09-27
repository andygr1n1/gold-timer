import { XXButton } from '@/components-x/x-button/XButton'
import { Form } from 'antd'
import { observer } from 'mobx-react-lite'
import { StyledButton } from '../buttons/StyledButton'

export const FormFooter: React.FC<{
    disabled?: boolean
    okTitle?: string
    onOk: (e: React.MouseEvent<HTMLElement, MouseEvent>) => void
    onCancel: () => void
}> = observer(({ onCancel, onOk, okTitle = 'Ok', disabled = false }) => {
    return (
        <Form.Item>
            <div className='mt-10 flex w-full items-center justify-center gap-6'>
                <StyledButton onClick={onCancel} variant='outlined' error>
                    Cancel
                </StyledButton>
                <StyledButton disabled={disabled} onClick={onOk}>
                    {okTitle}
                </StyledButton>
            </div>
        </Form.Item>
    )
})
