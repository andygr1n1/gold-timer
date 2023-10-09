import { useGoalsStore } from '@/StoreProvider'
import { observer } from 'mobx-react-lite'
import { ToggleFavorite } from './components/ToggleFavoriteGoal'
import { DeleteGoal } from './components/DeleteGoal'
import { ToggleEditGoal } from './components/ToggleEditGoal'
import { CreateNewChildGoal } from './components/CreateNewChildGoal'
import { UpgradeToRitualGoal } from './components/UpgradeToRitualGoal'

export const GoalActionsMenu: React.FC = observer(() => {
    const { new_goal } = useGoalsStore()
    if (!new_goal?.view_mode && !new_goal?.edit_mode) return null

    return (
        <>
            <div className='relative flex w-full flex-wrap items-center justify-center gap-4'>
                <UpgradeToRitualGoal />
                <CreateNewChildGoal />
                <ToggleEditGoal />
                <ToggleFavorite />
                <DeleteGoal />
            </div>
        </>
    )
})
