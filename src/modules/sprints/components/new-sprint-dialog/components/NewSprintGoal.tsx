import { ISprintGoal } from '@/mst/types'
import { Input } from 'antd'
import { observer } from 'mobx-react-lite'

export const NewSprintGoal: React.FC<{ goal: ISprintGoal }> = observer(({ goal }) => {
    const { title, onChangeField } = goal

    return (
        <Input
            size='large'
            value={title}
            autoFocus={true}
            onChange={(e) => onChangeField('title', e.target.value)}
            placeholder='Goal'
        />
    )
})
