import { RdInput } from '@/components/antrd-input/RdInput'
import { useGoalsStore } from '@/StoreProvider'
import { Divider } from 'antd'
import { observer } from 'mobx-react-lite'

export const InputTitle: React.FC = observer(() => {
    const { editable_goal } = useGoalsStore()

    if (!editable_goal) return null

    const { title } = editable_goal

    return (
        <>
            <div>
                <h3 className='py-3'>Title: </h3>
                <RdInput disabled value={title} />
            </div>
            <Divider />
        </>
    )
})
