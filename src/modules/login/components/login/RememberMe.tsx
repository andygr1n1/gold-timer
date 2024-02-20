import { XCheckbox } from '@/components-x/x-checkbox/XCheckbox'
import { Form } from 'antd'
import { observer } from 'mobx-react-lite'

export const RememberMe: React.FC = observer(() => {
    return (
        <Form.Item name='remember' valuePropName='checked'>
            <XCheckbox>
                <span className='!text-xs opacity-70'>Remember me</span>
            </XCheckbox>
        </Form.Item>
    )
})
