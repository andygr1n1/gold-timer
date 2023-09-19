import { Form } from 'antd'
import { observer } from 'mobx-react-lite'
import { FormLabel } from '@/components/form/FormLabel'

export const NewSprintDurationIndex: React.FC = observer(() => {
    return (
        <Form.Item>
            <FormLabel title='Sprint duration:' />
            <div className='text-cText'>7 days</div>
            {/* <NewSprintDuration /> */}
        </Form.Item>
    )
})
