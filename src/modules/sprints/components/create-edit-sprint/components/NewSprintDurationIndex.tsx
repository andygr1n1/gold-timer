import { Form } from 'antd'
import { observer } from 'mobx-react-lite'
import { NewSprintDuration } from './NewSprintDuration'
import { FormLabel } from '@/components/form/FormLabel'

export const NewSprintDurationIndex: React.FC = observer(() => {
    return (
        <Form.Item>
            <FormLabel title='Sprint duration:' />
            <NewSprintDuration />
        </Form.Item>
    )
})
