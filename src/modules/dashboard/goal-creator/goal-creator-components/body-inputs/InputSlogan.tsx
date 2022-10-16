import { RdInput } from '@/components/rd-inputs/RdInput'
import { useGoalsStore } from '@/StoreProvider'
import { Divider } from 'antd'
import { observer } from 'mobx-react-lite'

export const InputSlogan: React.FC = observer(() => {
    const { new_goal, is_creator_mode } = useGoalsStore()

    if (!new_goal) return null

    const { slogan, onChangeField } = new_goal

    return (
        <>
            <div>
                <h3 className='py-2'>Slogan: </h3>
                <RdInput
                    disabled={!is_creator_mode}
                    value={slogan}
                    onChange={(e) => onChangeField('slogan', e.target.value)}
                />
            </div>
            <Divider />
        </>
    )
})
