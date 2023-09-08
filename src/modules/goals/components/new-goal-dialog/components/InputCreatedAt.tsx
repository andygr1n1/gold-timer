import { useGoalsStore } from '@/StoreProvider'
import { Input } from 'antd'
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
                <Input
                    size='large'
                    disabled={!!created_at}
                    value={created_at && format(created_at, 'do MMMM yyyy HH:mm:ss')}
                />
            </div>
        </>
    )
})
