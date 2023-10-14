import { useGoalsStore } from '@/StoreProvider'
import { observer } from 'mobx-react-lite'
import { ActiveGoals } from './components/ActiveGoals'
import { CompletedGoals } from './components/CompletedGoals'
import { ExpiredGoals } from './components/ExpiredGoals'
import { FavoriteGoals } from './components/FavoriteGoals'
import { RitualGoals } from './components/RitualGoals'

export const PageGoals: React.FC = observer(() => {
    const { goals_checked_list_filter, goals } = useGoalsStore()
    return goals_checked_list_filter.length && goals.length ? (
        <div className='relative flex  flex-auto flex-col gap-5 overflow-auto p-5'>
            <FavoriteGoals />
            <ExpiredGoals />
            <ActiveGoals />
            <RitualGoals />
            <CompletedGoals />
        </div>
    ) : (
        <div className='font-xl animate-opacity font-kzen flex h-full w-full items-center justify-center font-bold'>
            Nothing to show...
        </div>
    )
})
