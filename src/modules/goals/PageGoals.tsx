import { useGoalsStore } from '@/StoreProvider'
import { observer } from 'mobx-react-lite'
import { ActiveGoals } from '../dashboard/components/ActiveGoals'
import { CompletedGoals } from '../dashboard/components/CompletedGoals'
import { ExpiredGoals } from '../dashboard/components/ExpiredGoals'
import { FavoriteGoals } from '../dashboard/components/FavoriteGoals'
import { FrozenGoals } from '../dashboard/components/FrozenGoals'
import { RitualGoals } from '../dashboard/components/RitualGoals'

export const PageGoals: React.FC = observer(() => {
    const { goals_checked_list_filter, goals } = useGoalsStore()
    return goals_checked_list_filter.length && goals.length ? (
        <div className='relative flex  flex-auto flex-col gap-5 overflow-auto p-5'>
            <FavoriteGoals />
            <ExpiredGoals />
            <ActiveGoals />
            <RitualGoals />
            <FrozenGoals />
            <CompletedGoals />
        </div>
    ) : (
        <div className='font-xl animate-opacity font-droid flex h-full w-full items-center justify-center font-bold'>
            Nothing to show...
        </div>
    )
})
