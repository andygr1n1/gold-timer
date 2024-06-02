import { useNotesStore } from '@/modules/app/mst/StoreProvider'
import { XRte } from '@/components-x/x-rte/XRte'
import { observer } from 'mobx-react-lite'
import { useEffect } from 'react'

export const NewNoteInput: React.FC = observer(() => {
    const { widget_new_note } = useNotesStore()
    const { description, onChangeField } = widget_new_note

    useEffect(() => {
        onChangeField('description', description)
    }, [])

    return (
        <XRte
            preserveWhitespace
            content={description}
            onChangeContent={(content) => {
                onChangeField('description', content)
            }}
            placeholder='Note...'
            className='[&_.ql-editor]:!max-h-[160px] [&_.ql-editor]:!min-h-[160px]'
        />
    )
})
