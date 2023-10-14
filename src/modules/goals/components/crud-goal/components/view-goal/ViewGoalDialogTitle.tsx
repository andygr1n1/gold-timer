import { useGoalsStore } from '@/StoreProvider'
import { observer } from 'mobx-react-lite'

export const ViewGoalDialogTitle: React.FC = observer(() => {
    const { selected_goal } = useGoalsStore()
    return selected_goal ? <div>{selected_goal.title}</div> : null
})
