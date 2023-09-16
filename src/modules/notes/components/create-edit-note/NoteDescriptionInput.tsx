import { useNotesStore } from '@/StoreProvider'
import { FormLabel } from '@/components/form/FormLabel'
import { Form, Input } from 'antd'
import { observer } from 'mobx-react-lite'

export const NoteDescriptionInput: React.FC = observer(() => {
    const { create_edit_note$ } = useNotesStore()

    const { description, onChangeField } = create_edit_note$

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
