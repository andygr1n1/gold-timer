import { WidgetInfoIcon } from '@/components/icons/WidgetInfoIcon'
import { useGoalsStore } from '@/StoreProvider'
import { truncate } from 'lodash'
import { observer } from 'mobx-react-lite'
import { toggleModalState, TopActiveGoalsModal } from './top-active-goals-modal/TopActiveGoalsModal'

import styles from '../TopGoalsWidget.module.scss'

export const TopActiveGoalsWidget: React.FC = observer(() => {
    const {
        topActiveGoals: { topFour },
    } = useGoalsStore()

    return topFour.length ? (
        <div className={styles['wrapper']}>
            <WidgetInfoIcon
                onClick={toggleModalState}
                icon='ic:baseline-rocket-launch'
                iconColor='text-white'
                bgColor='bg-teal-500 hover:bg-teal-400 cursor-pointer'
            />
            <div className={styles['goals-container']}>
                {topFour.map((goal) => (
                    <div key={goal.id} className={`${styles['goal']} bg-teal-500 hover:bg-teal-400`}>
                        {truncate(goal.title, { length: 35 })}
                    </div>
                ))}
            </div>
            <TopActiveGoalsModal />
        </div>
    ) : null
})
