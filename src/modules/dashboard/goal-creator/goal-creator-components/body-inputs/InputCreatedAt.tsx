import { RdInput } from '@/components/rd-inputs/RdInput'
import { useGoalsStore } from '@/StoreProvider'
import { Divider } from 'antd'
import { observer } from 'mobx-react-lite'

export const InputCreatedAt: React.FC = observer(() => {
    const { new_goal } = useGoalsStore()

    if (!new_goal) return null

    const { created_at } = new_goal

    return (
        <>
            <div>
                <h3 className='py-2'>Create Date: </h3>
                <RdInput disabled value={created_at?.toDateString()} />
            </div>
            <Divider />
        </>
    )
})
