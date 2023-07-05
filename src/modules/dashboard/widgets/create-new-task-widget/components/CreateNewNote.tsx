import { observer } from 'mobx-react-lite'
import { DescriptionTextArea } from './DescriptionTextArea'
import { TagInput } from './TagInput'
import { ButtonSaveTask } from './ButtonSaveTask'
import { useState } from 'react'
import { useTasksStore } from '@/StoreProvider'

export const CreateNewNote: React.FC = observer(() => {
    const {
        new_task$: { description },
    } = useTasksStore()

    const [hasDescription, setHasDescription] = useState(!!description)

    return (
        <div className='flex h-full w-full flex-col gap-5'>
            <DescriptionTextArea hasDescription={hasDescription} setHasDescription={setHasDescription} />
            <TagInput />
            <ButtonSaveTask disabled={!hasDescription} />
        </div>
    )
})
