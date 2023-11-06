import { ACTIVE_GOAL_TYPE_ENUM } from '@/helpers/enums'
import { useRootStore } from '@/StoreProvider'
import { observer } from 'mobx-react-lite'
import { TopGoal } from '../TopGoal'
import styles from '../TopGoalsWidgets.module.scss'
import { WidgetSvgIcon } from '@/components/icons/WidgetSvgIcon'
import ritualLogoIcon from '@/assets/ritual-logo.svg'

export const TopRitualGoalsWidget: React.FC = observer(() => {
    const {
        goals$: {
            topRitualGoals,
            goals_filter$: { onChangeField: onFilterStoreChangeField },
        },
        modal_windows$: { goals_manager_mw$ },
    } = useRootStore()

    const handleModalState = () => {
        onFilterStoreChangeField('goals_collapse_type', ACTIVE_GOAL_TYPE_ENUM.RITUALIZED)
        goals_manager_mw$.onChangeField('visible', true)
    }

    return (
        <div className={styles['wrapper']}>
            {<WidgetSvgIcon onClick={handleModalState} icon={ritualLogoIcon} />}
            <div className={styles['goals-container']}>
                {topRitualGoals.length ? (
                    <>
                        {topRitualGoals.map((goal) => (
                            <TopGoal key={goal.id} goal={goal} type={ACTIVE_GOAL_TYPE_ENUM.RITUALIZED} />
                        ))}
                    </>
                ) : (
                    <div className='absolute-center  flex w-full items-center justify-center self-center text-gray-500'>
                        💫 enjoy the moment, no rituals 💫
                    </div>
                )}
            </div>
        </div>
    )
})
