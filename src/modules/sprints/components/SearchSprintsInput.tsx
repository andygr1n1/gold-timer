import { Input } from 'antd'
import { observer } from 'mobx-react-lite'
import { Icon } from '@iconify/react'
import { useRootStore } from '@/StoreProvider'

export const SearchSprintsInput: React.FC = observer(() => {
    const {
        sprints$: {
            sprints_filter$: { sprints_input_filter, onChangeField },
        },
    } = useRootStore()

    return (
        <>
            <Input
                className='dynamic-filter'
                value={sprints_input_filter}
                onChange={(e) => onChangeField('sprints_input_filter', e.target.value)}
                prefix={<Icon icon='line-md:search' width={20} height={20} className='text-cText pr-2' />}
            />
        </>
    )
})
