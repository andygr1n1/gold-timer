import { useSprintsStore } from '@/app/StoreProvider'
import { FormLabel } from '@/components/form/FormLabel'
import { Form, Input } from 'antd'
import { observer } from 'mobx-react-lite'

export const NewSprintDescription: React.FC = observer(() => {
    const { new_sprint } = useSprintsStore()

    if (!new_sprint) return null

    const { description, onChangeField } = new_sprint

    return (
        <Form.Item>
            <FormLabel title='Description:' />
            <Input.TextArea
                size='large'
                value={description || ''}
                autoFocus={true}
                onChange={(e) => onChangeField('description', e.target.value)}
                placeholder='Description'
            />
        </Form.Item>
    )
})
