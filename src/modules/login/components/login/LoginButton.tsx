import { Button, Form } from 'antd'
import { observer } from 'mobx-react-lite'

export const LoginButton: React.FC<{ title: string }> = observer(({ title }) => {
    return (
        <Form.Item className='flex justify-center'>
            <Button type='primary' htmlType='submit'>
                {title}
            </Button>
        </Form.Item>
    )
})
