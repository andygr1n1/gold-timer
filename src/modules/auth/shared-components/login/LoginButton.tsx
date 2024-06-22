import { StyledButton } from '@/components/buttons/StyledButton'
import { Form } from 'antd'
import { observer } from 'mobx-react-lite'

export const LoginButton: React.FC<{ title: string }> = observer(({ title }) => {
    return (
        <Form.Item className='flex w-full justify-center px-11 [&_*]:w-full'>
            <StyledButton className='!w-full !justify-center !text-center' type='submit'>
                {title}
            </StyledButton>
        </Form.Item>
    )
})
