import { useNotesStore } from '@/StoreProvider'
import { Input } from 'antd'
import { observer } from 'mobx-react-lite'

export const TagInput = observer(() => {
    const {
        new_note$: { tag, onChangeField },
    } = useNotesStore()

    return (
        <Input
            className='!bg-global-3-bg'
            size='large'
            value={tag}
            onChange={(e) => {
                onChangeField('tag', e.target.value)
            }}
            placeholder='Type a tag...'
        />
    )
})
