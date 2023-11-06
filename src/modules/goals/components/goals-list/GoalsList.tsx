import { useGoalsStore } from '@/StoreProvider'
import { observer } from 'mobx-react-lite'
import { ActiveGoals } from './components/ActiveGoals'
// import { CompletedGoals } from './components/CompletedGoals'
import { ExpiredGoals } from './components/ExpiredGoals'
import { FavoriteGoals } from './components/FavoriteGoals'
import { RitualGoals } from './components/RitualGoals'

export const GoalsList: React.FC = observer(() => {
    const {
        goals_filter$: { allGoalsFilteredByTitle, show_favorites: show_favorite },
    } = useGoalsStore()

    if (show_favorite) return <FavoriteGoals />

    return allGoalsFilteredByTitle.length ? (
        <div className='relative flex  flex-auto flex-col gap-5 overflow-auto'>
            <ExpiredGoals />
            <ActiveGoals />
            <RitualGoals />
            {/* <CompletedGoals /> */}
        </div>
    ) : (
        <div className='font-xl animate-opacity absolute-center font-kzen pointer-events-none flex h-full w-full items-center justify-center bg-transparent font-bold'>
            Nothing found by current filter...
        </div>
    )
})
