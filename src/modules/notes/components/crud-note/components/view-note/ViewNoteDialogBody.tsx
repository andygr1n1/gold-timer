import { observer } from 'mobx-react-lite'
import { NotesActionsMenu } from '../common-components/actions-menu/NotesActionsMenu'
import { useNotesStore } from '@/app/StoreProvider'
import { FormFooter } from '@/components/form/FormFooter'
import { INote$ } from '@/modules/notes/mst/types'
import { NoteTagsList } from '../../../NoteTagsList'
import ReactQuill from 'react-quill'
import { useEffect, useState } from 'react'

export const ViewNoteDialogBody: React.FC = observer(() => {
    const { selected_note } = useNotesStore()
    const [d, setD] = useState('')

    // *
    // a hack for correct render of description
    useEffect(() => {
        selected_note && setD(selected_note?.description)
    }, [selected_note])

    return selected_note ? (
        <>
            <div className='flex flex-col flex-auto'>
                <div className='flex flex-col gap-10 pb-4 '>
                    <NotesActionsMenu note={selected_note} />
                    <NoteTagsList note={selected_note} />
                </div>
                <ReactQuill className='view-mode' value={d} modules={{ toolbar: [] }} readOnly={true} />
            </div>
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
