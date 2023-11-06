import { useRootStore } from '@/StoreProvider'
import { observer } from 'mobx-react-lite'

import styles from '../TopGoalsWidgets.module.scss'
import { ACTIVE_GOAL_TYPE_ENUM } from '@/helpers/enums'
import { TopGoal } from '../TopGoal'
import { WidgetSvgIcon } from '@/components/icons/WidgetSvgIcon'
import todayLogoIcon from '@/assets/today-goal-logo.svg'

export const TopActiveGoalsWidget: React.FC = observer(() => {
    const {
        goals$: {
            goals_filter$: { onChangeField: onFilterStoreChangeField },
            topActiveGoals: { topFour },
        },
        modal_windows$: { goals_manager_mw$ },
    } = useRootStore()

    const handleModalState = () => {
        onFilterStoreChangeField('goals_collapse_type', ACTIVE_GOAL_TYPE_ENUM.ACTIVE)
        goals_manager_mw$.onChangeField('visible', true)
    }

    return (
        <div className={styles['wrapper']}>
            {<WidgetSvgIcon onClick={handleModalState} icon={todayLogoIcon} />}

            <div className={styles['goals-container']}>
                {topFour.length ? (
                    <>
                        {topFour.map((goal) => (
                            <TopGoal key={goal.id} goal={goal} type={ACTIVE_GOAL_TYPE_ENUM.ACTIVE} />
                        ))}
                    </>
                ) : (
                    <div className='absolute-center  flex w-full items-center justify-center self-center text-gray-500'>
                        🍀 take it easy today, no goals 🍀
                    </div>
                )}
            </div>
        </div>
    )
})
