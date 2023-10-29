import { observer } from 'mobx-react-lite'
import { NotesActionsMenu } from '../common-components/actions-menu/NotesActionsMenu'
import { useNotesStore } from '@/StoreProvider'
import { FormFooter } from '@/components/form/FormFooter'
import { INote$ } from '@/modules/notes/mst/types'
import { NoteTagsList } from '../../../NoteTagsList'
import { Interweave } from 'interweave'

export const ViewNoteDialogBody: React.FC = observer(() => {
    const { selected_note } = useNotesStore()
    return selected_note ? (
        <>
            <div className='flex flex-col gap-10 pb-4'>
                <NotesActionsMenu note={selected_note} />
                <NoteTagsList note={selected_note} />
            </div>
            <Interweave
                className='overflow-wrap-anywhere flex h-full flex-auto cursor-pointer flex-col text-lg'
                allowAttributes
                disableMatchers
                disableFilters
                allowElements
                content={selected_note.description}
            />
            <Footer note={selected_note} />
        </>
    ) : null
})

const Footer: React.FC<{ note: INote$ }> = observer(() => {
    const { onChangeField } = useNotesStore()

    const onCancel = () => {
        onChangeField('selected_note', undefined)
    }

    return (
        <FormFooter
            hideOkButton
            onOk={() => {
                onCancel()
            }}
            onCancel={onCancel}
        />
    )
})
