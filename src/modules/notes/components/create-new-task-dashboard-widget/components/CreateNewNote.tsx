import { observer } from 'mobx-react-lite'
import { DescriptionTextArea } from './DescriptionTextArea'
import { TagInput } from './TagInput'
import { ButtonSaveTask } from './ButtonSaveTask'
import { useState } from 'react'
import { useNotesStore } from '@/StoreProvider'

export const CreateNewNote: React.FC = observer(() => {
    const {
        create_edit_note$: { description },
    } = useNotesStore()

    const [hasDescription, setHasDescription] = useState(!!description)

    return (
        <div className='bg-global-2-bg flex h-[280px] w-[calc(100%-80px)] max-w-[300px] flex-col gap-5 rounded-md p-10'>
            <DescriptionTextArea hasDescription={hasDescription} setHasDescription={setHasDescription} />
            <TagInput />
            <ButtonSaveTask disabled={!hasDescription} />
        </div>
    )
})
