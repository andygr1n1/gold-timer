import { XRte } from '@/components-x/x-rte/XRte'
import { FormLabel } from '@/components/form/FormLabel'
import { INote$ } from '@/modules/notes/mst/types'
import { Form } from 'antd'
import { observer } from 'mobx-react-lite'
import { useEffect } from 'react'

export const NoteDescriptionInput: React.FC<{ note: INote$ }> = observer(({ note }) => {
    const { description, onChangeField } = note

    useEffect(() => {
        onChangeField('description', description)
    }, [])

    return (
        <Form.Item>
            <FormLabel title='Note:' />
            <XRte
                content={description}
                onChangeContent={(content) => {
                    onChangeField('description', content)
                }}
            />
        </Form.Item>
    )
})
