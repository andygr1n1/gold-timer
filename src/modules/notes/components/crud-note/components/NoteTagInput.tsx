import { useNotesStore } from '@/StoreProvider'
import { FormLabel } from '@/components/form/FormLabel'
import { observer } from 'mobx-react-lite'
import { NoteTagsList } from '../../NoteTagsList'
import { StyledButton } from '@/components/buttons/StyledButton'
import { XInput } from '@/components-x/x-input/XInput'
import { uniq } from 'lodash-es'

export const NoteTagInput: React.FC = observer(() => {
    const { create_edit_note$ } = useNotesStore()

    const { new_tag, onChangeField, newTagIsValid, deleteTag, tag } = create_edit_note$

    return (
        <div>
            <FormLabel title='Tag:' />
            <div className='mb-2 flex w-full items-center gap-2 '>
                <XInput
                    placeholder='Tag me...'
                    value={new_tag || ''}
                    onChange={(e) => onChangeField('new_tag', e.target.value)}
                />
                <StyledButton
                    disabled={!newTagIsValid}
                    onClick={() => {
                        onChangeField('tag', tag + ',' + uniq(new_tag.split(',').map((tag) => tag.trim())).join(','))
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
