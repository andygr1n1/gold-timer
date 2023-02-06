import { WidgetInfoIcon } from '@/components/icons/WidgetInfoIcon'
import { useGoalsStore } from '@/StoreProvider'
import { truncate } from 'lodash'
import { observer } from 'mobx-react-lite'
import styles from './TopGoalsWidget.module.scss'

export const TopRitualGoalsWidget: React.FC = observer(() => {
    const { topRitualGoals } = useGoalsStore()
    return topRitualGoals.length ? (
        <div className={styles['wrapper']}>
            <WidgetInfoIcon icon='game-icons:magic-gate' iconColor='text-white' bgColor='bg-indigo-700 top-3' />
            <div className={styles['goals-container']}>
                {topRitualGoals.map((goal) => (
                    <div key={goal.id} className={`${styles['goal']} bg-indigo-700 hover:bg-indigo-600`}>
                        {truncate(goal.title, { length: 35 })}
                    </div>
                ))}
            </div>
        </div>
    ) : null
})
