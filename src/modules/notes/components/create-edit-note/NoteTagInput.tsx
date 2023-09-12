import { useNotesStore } from '@/StoreProvider'
import { FormLabel } from '@/components/form/FormLabel'
import { Button, Form, Input, Space } from 'antd'
import { observer } from 'mobx-react-lite'
import { NoteTagsList } from '../note/NoteTagsList'

export const NoteTagInput: React.FC = observer(() => {
    const { selected_note } = useNotesStore()

    if (!selected_note) return null

    const { new_tag, onChangeField, newTagIsValid: newTagValidation } = selected_note

    return (
        <Form.Item>
            <FormLabel title='Tag:' />
            <Space.Compact size='large' className='mb-5 w-full'>
                <Input
                    placeholder='Tag me...'
                    value={new_tag || ''}
                    onChange={(e) => onChangeField('new_tag', e.target.value)}
                />
                <Button
                    disabled={!newTagValidation}
                    type='primary'
                    className='!h-9 !text-sm'
                    onClick={() => {
                        selected_note.onChangeField('tag', selected_note.tag + ',' + new_tag)
                        selected_note.onChangeField('new_tag', '')
                    }}
                >
                    Save
                </Button>
            </Space.Compact>
            <NoteTagsList note={selected_note} />
        </Form.Item>
    )
})
