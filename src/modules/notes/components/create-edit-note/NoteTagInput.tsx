import { useNotesStore } from '@/StoreProvider'
import { FormLabel } from '@/components/form/FormLabel'
import { Button, Form, Input, Space } from 'antd'
import { observer } from 'mobx-react-lite'
import { NoteTagsList } from '../NoteTagsList'

export const NoteTagInput: React.FC = observer(() => {
    const { create_edit_note$ } = useNotesStore()

    const { new_tag, onChangeField, newTagIsValid, deleteTag, tag } = create_edit_note$

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
                    disabled={!newTagIsValid}
                    type='primary'
                    className='!h-9 !text-sm'
                    onClick={() => {
                        onChangeField('tag', tag + ',' + new_tag)
                        onChangeField('new_tag', '')
                    }}
                >
                    Save
                </Button>
            </Space.Compact>
            <NoteTagsList note={create_edit_note$} deleteAction={deleteTag} />
        </Form.Item>
    )
})
