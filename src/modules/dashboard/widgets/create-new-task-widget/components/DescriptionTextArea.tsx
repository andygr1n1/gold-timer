import { useTasksStore } from '@/StoreProvider'
import TextArea from 'antd/es/input/TextArea'
import { observer } from 'mobx-react-lite'

export const DescriptionTextArea = observer(() => {
    const {
        new_task$: { description, onChangeField },
    } = useTasksStore()

    return (
        <TextArea
            className='flex h-full w-full flex-auto'
            value={description}
            placeholder='task...'
            onChange={(e) => {
                onChangeField('description', e.target.value)
            }}
        />
    )
})
