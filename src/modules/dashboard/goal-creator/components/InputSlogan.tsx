import { RdInput } from '@/components/antrd-input/RdInput'
import { useGoalsStore } from '@/StoreProvider'
import { Divider } from 'antd'
import { observer } from 'mobx-react-lite'

export const InputSlogan: React.FC = observer(() => {
    const { editable_goal } = useGoalsStore()

    if (!editable_goal) return null

    const { slogan } = editable_goal

    return (
        <>
            <div>
                <h3 className='py-2'>Slogan: </h3>
                <RdInput disabled value={slogan} />
            </div>
            <Divider />
        </>
    )
})
