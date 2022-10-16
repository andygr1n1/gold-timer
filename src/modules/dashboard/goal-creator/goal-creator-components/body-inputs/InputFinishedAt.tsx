import { RdInput } from '@/components/rd-inputs/RdInput'
import { useGoalsStore } from '@/StoreProvider'
import { Divider } from 'antd'
import { observer } from 'mobx-react-lite'

export const InputFinishedAt: React.FC = observer(() => {
    const { new_goal } = useGoalsStore()

    if (!new_goal) return null

    const { finished_at } = new_goal

    return (
        <>
            <div>
                <h3 className='py-2'>Finish Date: </h3>
                <RdInput disabled value={finished_at?.toDateString()} />
            </div>
            <Divider />
        </>
    )
})
