import { useNotesStore } from '@/StoreProvider'
import { FormLabel } from '@/components/form/FormLabel'
import { Form, Input } from 'antd'
import { observer } from 'mobx-react-lite'
import { useEffect } from 'react'
import ReactQuill from 'react-quill'

export const NoteDescriptionInput: React.FC = observer(() => {
    const { create_edit_note$ } = useNotesStore()

    const { description, onChangeField } = create_edit_note$

    useEffect(() => {
        onChangeField('description', description)
    }, [])

    console.log('description', description)
    return (
        <Form.Item>
            <FormLabel title='Note:' />
            <ReactQuill
                preserveWhitespace
                theme='snow'
                value={description}
                onChange={(content, delta, source, editor) => {
                    console.log(content)
                    console.log('delta', delta)
                    console.log('source', source)
                    console.log('editor', editor)

                    onChangeField('description', content)
                }}
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
