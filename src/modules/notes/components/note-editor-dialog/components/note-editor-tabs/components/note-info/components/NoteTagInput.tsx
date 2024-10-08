import { FormLabel } from '@/components/form/FormLabel'
import { NoteTagsList } from '../../../../../../../shared-components/NoteTagsList'
import { StyledButton } from '@/components/buttons/StyledButton'
import { XInput } from '@/components-x/x-input/XInput'
import { compact, uniq } from 'lodash-es'
import { useFormikContext } from 'formik'
import { type INoteSchema } from '@/modules/notes/shared-services/types'
import { getNoteTags } from '@/modules/notes/helpers/getNoteTags'
import { useNoteEditorDialog$ } from '@/modules/notes/components/note-editor-dialog/mst/provider'
import { observer } from 'mobx-react-lite'

export const NoteTagInput = observer(() => {
    const formikContext = useFormikContext<INoteSchema>()
    const { tagInput, onChangeField } = useNoteEditorDialog$()
    const newTagIsValid = (tag: string | null): boolean => {
        const tagsOptimized = compact(tag?.split(',').map((t) => t.trim().toLowerCase())).slice()
        return !!tagInput.length && !tagsOptimized.includes(tagInput.trim().toLowerCase())
    }

    const deleteTag = (tagToDelete: string) => {
        const { noteTags } = getNoteTags(formikContext.values.tag)
        if (!noteTags.length) return

        const newTag = noteTags.filter((noteTag) => noteTag !== tagToDelete)
        formikContext.setFieldValue('tag', newTag.toString())
    }

    return (
        <div>
            <FormLabel title='Tag:' />
            <div className='mb-2 flex w-full items-center gap-2 '>
                <XInput value={tagInput} onChange={(e) => onChangeField('tagInput', e.target.value)} />
                <StyledButton
                    disabled={!newTagIsValid(formikContext.values.tag)}
                    onClick={() => {
                        const startString = formikContext.values.tag ? formikContext.values.tag + ',' : ''
                        formikContext.setFieldValue(
                            'tag',
                            startString + uniq(tagInput.split(',').map((tag) => tag.trim())).join(','),
                        )
                        onChangeField('tagInput', '')
                    }}
                >
                    Add
                </StyledButton>
            </div>
            <NoteTagsList note={formikContext.values} deleteAction={deleteTag} />
        </div>
    )
})
