import { XInput } from '@/components-x/x-input/XInput'
import { useGuestsFilters$ } from '@/modules/wedding-story-admin/mst/guestsFilters.provider'
import { observer } from 'mobx-react-lite'

export const FilterByText = observer(() => {
    const { textValue: value, onChangeField } = useGuestsFilters$()
    return (
        <div className='max-w-xs'>
            <XInput value={value} onChange={(e) => onChangeField('textValue', e.target.value)} placeholder='Search' />
        </div>
    )
})
