import { Input } from 'antd'
import { observer } from 'mobx-react-lite'
import { Icon } from '@iconify/react'
import { useNotesStore } from '@/StoreProvider'

export const SearchNotesInput: React.FC = observer(() => {
    const {
        notes_filter$: { notes_input_filter, onChangeField },
    } = useNotesStore()

    return (
        <>
            <Input
                className='dynamic-filter'
                value={notes_input_filter}
                onChange={(e) => onChangeField('notes_input_filter', e.target.value)}
                prefix={<Icon icon='line-md:search' width={23} height={23} className='text-xBlue-2 pr-2' />}
                placeholder='Filter by description'
            />
        </>
    )
})
