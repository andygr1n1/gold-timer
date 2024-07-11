import { FormLabel } from '@/components/form/FormLabel'
import { NoteTagsList } from '../../../../../../../shared-components/NoteTagsList'
import { StyledButton } from '@/components/buttons/StyledButton'
import { XInput } from '@/components-x/x-input/XInput'
import { compact, uniq } from 'lodash-es'
import { useFormikContext } from 'formik'
import { INoteSchema } from '@/modules/notes/shared-services/types'
import { getNoteTags } from '@/modules/notes/helpers/getNoteTags'
import { useNoteTag$ } from '@/modules/notes/components/note-editor-dialog/stores/note-tag-store/useNoteTag.store'

export const NoteTagInput = () => {
    const formikContext = useFormikContext<INoteSchema>()
    const { store, setStore } = useNoteTag$()
    const newTagIsValid = (tag: string | null): boolean => {
        const tagsOptimized = compact(tag?.split(',').map((t) => t.trim().toLowerCase())).slice()
        return !!store.value.length && !tagsOptimized.includes(store.value.trim().toLowerCase())
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
                <XInput placeholder='Tag me...' value={store.value} onChange={(e) => setStore(e.target.value)} />
                <StyledButton
                    disabled={!newTagIsValid(formikContext.values.tag)}
                    onClick={() => {
                        const startString = formikContext.values.tag ? formikContext.values.tag + ',' : ''
                        formikContext.setFieldValue(
                            'tag',
                            startString + uniq(store.value.split(',').map((tag) => tag.trim())).join(','),
                        )
                        setStore('')
                    }}
                >
                    Add
                </StyledButton>
            </div>
            <NoteTagsList note={formikContext.values} deleteAction={deleteTag} />
        </div>
    )
}
