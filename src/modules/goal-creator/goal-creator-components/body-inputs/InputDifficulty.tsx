import { RdInput } from '@/components/rd-inputs/RdInput'
import { useGoalsStore } from '@/StoreProvider'
import { Divider } from 'antd'
import { observer } from 'mobx-react-lite'

export const InputDifficulty: React.FC = observer(() => {
    const { new_goal } = useGoalsStore()

    if (!new_goal) return null

    const { difficulty } = new_goal

    return (
        <>
            <div>
                <h3 className='py-2'>Difficulty: </h3>
                <RdInput disabled value={difficulty} />
            </div>
            <Divider />
        </>
    )
})
