import { WidgetInfoIcon } from '@/components/icons/WidgetInfoIcon'
import { useGoalsStore } from '@/StoreProvider'
import { truncate } from 'lodash'
import { observer } from 'mobx-react-lite'

import styles from './TopGoalsWidget.module.scss'

export const TopActiveGoalsWidget: React.FC = observer(() => {
    const { topActiveGoals } = useGoalsStore()

    return topActiveGoals.length ? (
        <div className={styles['wrapper']}>
            <WidgetInfoIcon icon='ic:baseline-rocket-launch' iconColor='text-white' bgColor='bg-teal-500 top-3' />
            <div className={styles['goals-container']}>
                {topActiveGoals.map((goal) => (
                    <div key={goal.id} className={`${styles['goal']} bg-teal-500 hover:bg-teal-400`}>
                        {truncate(goal.title, { length: 35 })}
                    </div>
                ))}
            </div>
        </div>
    ) : null
})
