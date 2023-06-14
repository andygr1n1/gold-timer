import { Button, Form } from 'antd'
import { observer } from 'mobx-react-lite'

export const RegisterButton: React.FC = observer(() => {
    return (
        <Form.Item className='flex justify-center'>
            <Button type='primary' htmlType='submit'>
                Register
            </Button>
        </Form.Item>
    )
})
