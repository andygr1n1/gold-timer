import { useNotesStore } from '@/StoreProvider'
import { observer } from 'mobx-react-lite'
import { useEffect } from 'react'
import ReactQuill from 'react-quill'

export const NewNoteInput: React.FC = observer(() => {
    const { widget_new_note } = useNotesStore()
    const { description, onChangeField } = widget_new_note

    useEffect(() => {
        onChangeField('description', description)
    }, [])

    return (
        <ReactQuill
            preserveWhitespace
            value={description}
            onChange={(content) => {
                onChangeField('description', content)
            }}
            placeholder='Note...'
            className='[&_.ql-editor]:!max-h-[160px] [&_.ql-editor]:!min-h-[160px]'
        />
    )
})
