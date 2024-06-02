import { useNotesStore } from '@/modules/app/mst/StoreProvider'
import { XInput } from '@/components-x/x-input/XInput'
import { observer } from 'mobx-react-lite'

export const TagInput: React.FC = observer(() => {
    const { widget_new_note } = useNotesStore()
    const { new_tag, onChangeField } = widget_new_note

    return (
        <XInput
            placeholder='Tag me...'
            value={new_tag || ''}
            onChange={(e) => onChangeField('new_tag', e.target.value)}
        />
    )
})
