import { useGoalsStore } from '@/StoreProvider'
import TextArea from 'antd/lib/input/TextArea'
import { observer } from 'mobx-react-lite'

export const TextAreaDescription: React.FC = observer(() => {
    const { new_goal, is_creator_mode } = useGoalsStore()

    if (!new_goal) return null

    const { description, onChangeField } = new_goal

    return (
        <div className='py-2'>
            <h5 className='mb-1'>Description: </h5>
            <TextArea
                disabled={!is_creator_mode}
                value={description}
                onChange={(e) => onChangeField('description', e.target.value)}
                rows={6}
            />
        </div>
    )
})
