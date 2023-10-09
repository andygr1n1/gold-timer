import { ACTIVE_GOAL_TYPE_ENUM } from '@/helpers/enums'
import { useRootStore } from '@/StoreProvider'
import { observer } from 'mobx-react-lite'
import { TopGoal } from '../TopGoal'
import styles from '../TopGoalsWidgets.module.scss'
import { WidgetSvgIcon } from '@/components/icons/WidgetSvgIcon'
import expiredLogoIcon from '@/assets/expired-goals-logo.svg'
export const TopExpiredGoalsWidget: React.FC = observer(() => {
    const {
        goals$: {
            topExpiredGoals,
            filter$: { onChangeField: onFilterStoreChangeField },
        },
        modal_windows$: { goals_manager_mw$ },
    } = useRootStore()

    const handleModalState = () => {
        onFilterStoreChangeField('goals_collapse_type', ACTIVE_GOAL_TYPE_ENUM.EXPIRED)
        goals_manager_mw$.onChangeField('visible', true)
    }

    return topExpiredGoals.length ? (
        <div className={styles['wrapper']}>
            {<WidgetSvgIcon onClick={handleModalState} icon={expiredLogoIcon} />}

            <div className={styles['goals-container']}>
                {topExpiredGoals.length ? (
                    <>
                        {topExpiredGoals.map((goal) => (
                            <TopGoal key={goal.id} goal={goal} type={ACTIVE_GOAL_TYPE_ENUM.EXPIRED} />
                        ))}
                    </>
                ) : (
                    <div className='absolute-center  flex w-full items-center justify-center self-center text-gray-500'>
                        💓 you are awesome! 💓
                    </div>
                )}
            </div>
        </div>
    ) : null
})
