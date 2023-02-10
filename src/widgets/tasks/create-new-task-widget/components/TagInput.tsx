import { useTasksStore } from '@/StoreProvider'
import { Input } from 'antd'
import { observer } from 'mobx-react-lite'

export const TagInput = observer(() => {
    const {
        new_task$: { tag, onChangeField },
    } = useTasksStore()

    return (
        <Input
            value={tag}
            onChange={(e) => {
                onChangeField('tag', e.target.value)
            }}
            placeholder='tag...'
        />
    )
})
