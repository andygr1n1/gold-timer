import { WidgetInfoIcon } from '@/components/icons/WidgetInfoIcon'
import { useGoalsStore } from '@/StoreProvider'
import { truncate } from 'lodash'
import { observer } from 'mobx-react-lite'
import styles from './TopGoalsWidget.module.scss'

export const TopExpiredGoalsWidget: React.FC = observer(() => {
    const { topExpiredGoals } = useGoalsStore()
    return topExpiredGoals.length ? (
        <div className={styles['wrapper']}>
            <WidgetInfoIcon icon='pajamas:expire' iconColor='text-white' bgColor='bg-rose-700 top-3 -left-8' />
            <div className={styles['goals-container']}>
                {topExpiredGoals.map((goal) => (
                    <div key={goal.id} className={`${styles['goal']} bg-rose-700 hover:bg-rose-600`}>
                        {truncate(goal.title, { length: 35 })}
                    </div>
                ))}
            </div>
        </div>
    ) : null
})
