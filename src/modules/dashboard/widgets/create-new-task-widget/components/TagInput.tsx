import { useTasksStore } from '@/StoreProvider'
import { Input } from 'antd'
import { observer } from 'mobx-react-lite'

export const TagInput = observer(() => {
    const {
        new_task$: { tag, onChangeField },
    } = useTasksStore()

    return (
        <Input
            size='large'
            value={tag}
            onChange={(e) => {
                onChangeField('tag', e.target.value)
            }}
            placeholder='Type a tag...'
        />
    )
})
