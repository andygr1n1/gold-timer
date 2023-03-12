import { RdInput } from '@/components-antd-redesign/rd-inputs/RdInput'
import { useGoalsStore } from '@/StoreProvider'
import { format } from 'date-fns'
import { observer } from 'mobx-react-lite'

export const InputCreatedAt: React.FC = observer(() => {
    const { new_goal } = useGoalsStore()

    if (!new_goal) return null

    const { created_at } = new_goal

    return (
        <>
            <div className='py-2'>
                <h5>Created: </h5>
                <RdInput
                    disabled={!!created_at}
                    className='m-0 p-0 disabled:bg-transparent'
                    value={created_at && format(created_at, 'do MMMM yyyy HH:mm:ss')}
                />
            </div>
        </>
    )
})
