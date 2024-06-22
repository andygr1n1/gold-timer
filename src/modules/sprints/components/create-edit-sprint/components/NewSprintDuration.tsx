import { useSprintsStore } from '@/modules/app/mst/StoreProvider'
import { Select } from 'antd'
import { observer } from 'mobx-react-lite'

export const NewSprintDuration: React.FC = observer(() => {
    const { new_sprint } = useSprintsStore()

    if (!new_sprint) return null

    const { duration, onChangeField, edit_mode } = new_sprint

    const options = [
        { id: 7, value: 7 },
        { id: 14, value: 14 },
    ]

    return edit_mode ? (
        <div className='text-cText text-base '>{duration + ' days'}</div>
    ) : (
        <Select
            disabled={edit_mode}
            size='large'
            value={duration + ' days'}
            autoFocus={true}
            onChange={(e) => {
                onChangeField('duration', Number(e))
            }}
            placeholder='Sprint title'
            options={options}
        />
    )
})
