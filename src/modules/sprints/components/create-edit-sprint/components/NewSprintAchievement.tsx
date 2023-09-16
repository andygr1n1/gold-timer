import { useSprintsStore } from '@/StoreProvider'
import { Input } from 'antd'
import { observer } from 'mobx-react-lite'

export const NewSprintAchievement: React.FC = observer(() => {
    const { new_sprint } = useSprintsStore()

    if (!new_sprint) return null

    const { achievement, onChangeField } = new_sprint

    return (
        <Input
            size='large'
            value={achievement || undefined}
            autoFocus={true}
            onChange={(e) => onChangeField('achievement', e.target.value)}
            placeholder='Sprint achievement'
        />
    )
})
