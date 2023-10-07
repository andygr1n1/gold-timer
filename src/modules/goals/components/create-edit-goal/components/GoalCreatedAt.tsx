import { useGoalsStore } from '@/StoreProvider'
import { XInput } from '@/components-x/x-input/XInput'
import { FormLabel } from '@/components/form/FormLabel'
import { format } from 'date-fns'
import { observer } from 'mobx-react-lite'

export const GoalCreatedAt: React.FC = observer(() => {
    const { new_goal } = useGoalsStore()

    if (!new_goal || !new_goal.view_mode || !new_goal?.created_at) return null

    const { view_mode, created_at } = new_goal

    return (
        <div>
            <FormLabel title='Created' />
            <XInput disabled={view_mode} readOnly={view_mode} value={format(created_at, 'do MMMM yyyy')} />
        </div>
    )
})
