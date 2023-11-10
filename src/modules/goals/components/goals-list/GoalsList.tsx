import { useGoalsStore } from '@/StoreProvider'
import { observer } from 'mobx-react-lite'
import { FavoriteGoals } from './components/FavoriteGoals'
import { Goal } from './components/goal/Goal'
import clsx from 'clsx'
import styles from './components/goal/Goal.module.scss'
import { useEffect } from 'react'

export const GoalsList: React.FC = observer(() => {
    const {
        goals,
        goals_filter$: { allGoalsFilteredByTitle, show_favorites, allActiveFilteredGoals, show_deleted },
    } = useGoalsStore()

    // useEffect(() => {
    //     console.log('showDeleted Effect')
    // }, [show_deleted])

    if (!allGoalsFilteredByTitle.length && goals.length)
        return (
            <div className='font-xl animate-opacity-5 absolute-center font-kzen pointer-events-none flex h-full w-full items-center justify-center bg-transparent font-bold'>
                Nothing found by current filter...
            </div>
        )

    if (show_favorites) return <FavoriteGoals />

    return (
        <div className='flex w-full flex-col gap-5 md:flex-row md:flex-wrap'>
            {allActiveFilteredGoals.map((item) => (
                <Goal key={item.id} goal={item} />
            ))}
            <div className={clsx(styles['goal-container'], '!bg-transparent')} />
            <div className={clsx(styles['goal-container'], '!bg-transparent')} />
        </div>
    )
})
