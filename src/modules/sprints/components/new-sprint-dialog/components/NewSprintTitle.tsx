import { useSprintsStore } from '@/StoreProvider'
import { Form, Input } from 'antd'
import { observer } from 'mobx-react-lite'
import { FormLabel } from '@/components/form/FormLabel'

export const NewSprintTitle: React.FC = observer(() => {
    const { new_sprint } = useSprintsStore()

    if (!new_sprint) return null

    const { title, onChangeField } = new_sprint

    return (
        <Form.Item>
            <FormLabel title='Title:' />
            <Input
                size='large'
                required={true}
                value={title}
                autoFocus={true}
                onChange={(e) => onChangeField('title', e.target.value)}
                placeholder='Sprint title'
            />
        </Form.Item>
    )
})
