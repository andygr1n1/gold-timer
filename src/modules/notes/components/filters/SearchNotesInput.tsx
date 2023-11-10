import { Input } from 'antd'
import { observer } from 'mobx-react-lite'
import { Icon } from '@iconify/react'
import { useNotesStore } from '@/StoreProvider'
import { XInput } from '@/components-x/x-input/XInput'

export const SearchNotesInput: React.FC = observer(() => {
    const {
        notes_filter$: { notes_input_filter, onChangeField },
    } = useNotesStore()

    return (
        <XInput
            value={notes_input_filter}
            onChange={(e) => onChangeField('notes_input_filter', e.target.value)}
            startIcon={<Icon icon='line-md:search' width={24} height={24} />}
            placeholder='Find note...'
        />
    )
})
