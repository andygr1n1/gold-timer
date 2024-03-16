import { observer } from 'mobx-react-lite'
import { useNotesStore } from '@/StoreProvider'
import { XInput } from '@/components-x/x-input/XInput'
import { IconSearch } from '@/assets/icons/IconSearch'

export const SearchNotesInput: React.FC = observer(() => {
    const {
        notes_filter$: { notes_input_filter, onChangeField },
    } = useNotesStore()

    return (
        <XInput
            value={notes_input_filter}
            onChange={(e) => onChangeField('notes_input_filter', e.target.value)}
            startIcon={<IconSearch width={24} height={24} />}
            placeholder='Find me...'
            width='!max-w-[600px] !w-full'
        />
    )
})
