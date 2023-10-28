import { useNotesStore } from '@/StoreProvider'
import { FormLabel } from '@/components/form/FormLabel'
import { Form } from 'antd'
import { observer } from 'mobx-react-lite'
import { useEffect } from 'react'
import ReactQuill from 'react-quill'

export const NoteDescriptionInput: React.FC = observer(() => {
    const { create_edit_note$ } = useNotesStore()

    const { description, onChangeField } = create_edit_note$

    useEffect(() => {
        onChangeField('description', description)
    }, [])

    return (
        <Form.Item>
            <FormLabel title='Note:' />
            <ReactQuill
                preserveWhitespace
                value={description}
                onChange={(content) => {
                    onChangeField('description', content)
                }}
                placeholder='Note...'
                className='[&_.ql-editor]:!max-h-[130px] [&_.ql-editor]:!min-h-[130px]'
            />
            {/* <Input.TextArea
                size='large'
                value={description || ''}
                autoFocus={true}
                onChange={(e) => onChangeField('description', e.target.value)}
                placeholder='Type something...'
                className='!min-h-[150px]'
            /> */}
        </Form.Item>
    )
})
