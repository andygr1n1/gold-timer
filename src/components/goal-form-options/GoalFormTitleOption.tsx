import { useGoalsStore } from '@/StoreProvider'
import { Input } from 'antd'
import { observer } from 'mobx-react-lite'

export const GoalFormTitleOption: React.FC = observer(() => {
    const { new_goal, is_creator_mode } = useGoalsStore()

    if (!new_goal) return null

    const { title, onChangeField } = new_goal

    return (
        <div className='py-2'>
            <h5 className='mb-1'>Title: </h5>
            <Input
                size='large'
                status={!!title.length ? undefined : 'error'}
                disabled={!is_creator_mode}
                value={title}
                autoFocus={true}
                onChange={(e) => onChangeField('title', e.target.value)}
            />
        </div>
    )
})
