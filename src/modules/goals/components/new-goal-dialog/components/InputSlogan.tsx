import { useGoalsStore } from '@/StoreProvider'
import { Input } from 'antd'
import { observer } from 'mobx-react-lite'

export const InputSlogan: React.FC = observer(() => {
    const { new_goal, is_creator_mode } = useGoalsStore()

    if (!new_goal) return null

    const { slogan, onChangeField } = new_goal

    return (
        <div className='py-2'>
            <h5 className='mb-1'>Slogan: </h5>
            <Input
                size='large'
                disabled={!is_creator_mode}
                value={slogan}
                onChange={(e) => onChangeField('slogan', e.target.value)}
            />
        </div>
    )
})