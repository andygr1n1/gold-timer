import { useNotesStore } from '@/StoreProvider'
import { FormLabel } from '@/components/form/FormLabel'
import { Form, Input } from 'antd'
import { observer } from 'mobx-react-lite'

export const NoteDescriptionInput: React.FC = observer(() => {
    const { selected_note } = useNotesStore()

    if (!selected_note) return null

    const { description, onChangeField } = selected_note

    return (
        <Form.Item>
            <FormLabel title='Note:' />
            <Input.TextArea
                size='large'
                value={description || ''}
                autoFocus={true}
                onChange={(e) => onChangeField('description', e.target.value)}
                placeholder='Type something...'
                className='!min-h-[150px]'
            />
        </Form.Item>
    )
})
