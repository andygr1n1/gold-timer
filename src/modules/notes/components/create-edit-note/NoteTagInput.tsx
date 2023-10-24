import { useNotesStore } from '@/StoreProvider'
import { FormLabel } from '@/components/form/FormLabel'
import { observer } from 'mobx-react-lite'
import { NoteTagsList } from '../NoteTagsList'
import { StyledButton } from '@/components/buttons/StyledButton'
import { XInput } from '@/components-x/x-input/XInput'

export const NoteTagInput: React.FC = observer(() => {
    const { create_edit_note$ } = useNotesStore()

    const { new_tag, onChangeField, newTagIsValid, deleteTag, tag } = create_edit_note$

    return (
        <div>
            <FormLabel title='Tag:' />
            <div className='mb-5 flex w-full items-center'>
                <XInput
                    wrapperClassName='!rounded-r-none'
                    width={'100%'}
                    placeholder='Tag me...'
                    value={new_tag || ''}
                    onChange={(e) => onChangeField('new_tag', e.target.value)}
                />
                <StyledButton
                    disabled={!newTagIsValid}
                    className='!rounded-l-none !text-sm'
                    onClick={() => {
                        onChangeField('tag', tag + ',' + new_tag)
                        onChangeField('new_tag', '')
                    }}
                >
                    Add
                </StyledButton>
            </div>
            <NoteTagsList note={create_edit_note$} deleteAction={deleteTag} />
        </div>
    )
})
