import { FormLabel } from '@/components/form/FormLabel'
import { INote$ } from '@/modules/notes/mst/types'
import { Form } from 'antd'
import { observer } from 'mobx-react-lite'
import { useEffect } from 'react'
import ReactQuill from 'react-quill'

export const NoteDescriptionInput: React.FC<{ note: INote$ }> = observer(({ note }) => {
    const { description, onChangeField } = note

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
                formats={['bold', 'italic', 'underline', 'strike', 'color', 'link', 'image', 'clean']}
                modules={{
                    toolbar: [
                        'bold',
                        'italic',
                        'underline',
                        'strike',
                        { color: ['red', 'blue', 'green'] },
                        'link',
                        'image',
                        'clean',
                    ],
                }}
            />
        </Form.Item>
    )
})
