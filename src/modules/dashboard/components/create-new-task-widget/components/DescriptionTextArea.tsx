import { useTasksStore } from '@/StoreProvider'
import TextArea from 'antd/es/input/TextArea'
import { observer } from 'mobx-react-lite'

export const DescriptionTextArea: React.FC<{
    hasDescription: boolean
    setHasDescription: React.Dispatch<React.SetStateAction<boolean>>
}> = observer(function DescriptionTextArea({ setHasDescription, hasDescription }) {
    const {
        new_task$: { description, onChangeField },
    } = useTasksStore()

    return (
        <TextArea
            className='flex !h-full'
            value={description}
            placeholder='Type a note...'
            onChange={(e) => {
                if (!hasDescription && e.target.value.trim()) {
                    setHasDescription(true)
                }
                if (!e.target.value.trim()) {
                    setHasDescription(false)
                }
                onChangeField('description', e.target.value)
            }}
        />
    )
})
