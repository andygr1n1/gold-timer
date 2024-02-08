import { useGoalsStore } from '@/StoreProvider'
import { observer } from 'mobx-react-lite'
import { FavoriteGoals } from './components/FavoriteGoals'
import { Goal } from './components/goal/Goal'
import { GoalListStabilizer } from './components/goal/GoalListStabilizer'

export const GoalsList: React.FC = observer(() => {
    const {
        goals,
        goals_filter$: { show_favorites, goalsListConstructor, goalsTimeFrame },
    } = useGoalsStore()

    if (!goalsTimeFrame.length) return null

    if (!goalsListConstructor.timeFrame.length && goals.length)
        return (
            <div className='font-xl animate-opacity-5 absolute-center font-kzen pointer-events-none flex h-full w-full items-center justify-center bg-transparent font-bold'>
                Nothing found by current filter...
            </div>
        )

    if (show_favorites) return <FavoriteGoals />

    return (
        <div className='flex w-full flex-col gap-5 md:flex-row md:flex-wrap'>
            {goalsListConstructor.timeFrame.map((gtf) => (
                <div key={gtf} className='flex w-full flex-col'>
                    <div className='mb-5'>{gtf}</div>
                    <div className='flex w-full flex-col gap-5 md:flex-row md:flex-wrap'>
                        {goalsListConstructor.generateGoals(gtf, goalsListConstructor.goals).map((item) => (
                            <Goal key={item.id} goal={item} />
                        ))}
                        {/* stabilizer */}
                        <GoalListStabilizer />
                    </div>
                </div>
            ))}
        </div>
    )
})
