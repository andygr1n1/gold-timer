import { Form } from 'antd'
import { observer } from 'mobx-react-lite'
import { NewSprintDuration } from './NewSprintDuration'

export const NewSprintDurationIndex: React.FC = observer(() => {
    return (
        <Form.Item>
            <h5 className='!my-5'>Sprint duration:</h5>
            <NewSprintDuration />
        </Form.Item>
    )
})
