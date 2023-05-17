import { WidgetInfoIcon } from '@/components/icons/WidgetInfoIcon'
import { ACTIVE_GOAL_TYPE_ENUM } from '@/helpers/enums'
import { useRootStore } from '@/StoreProvider'
import { observer } from 'mobx-react-lite'
import { TopGoal } from '../TopGoal'
import styles from '../TopGoalsWidgets.module.scss'

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
            <WidgetInfoIcon
                onClick={handleModalState}
                icon='pajamas:expire'
                iconColor='text-white'
                bgColor='bg-rose-700 hover:bg-rose-600 cursor-pointer  -left-5'
            />
            <div className={styles['goals-container']}>
                {topExpiredGoals.length ? (
                    <>
                        {topExpiredGoals.map((goal) => (
                            <TopGoal key={goal.id} goal={goal} type={ACTIVE_GOAL_TYPE_ENUM.EXPIRED} />
                        ))}
                    </>
                ) : (
                    <div className='absolute-center flex w-full items-center justify-center self-center font-neon text-gray-500'>
                        💓 you are awesome! 💓
                    </div>
                )}
            </div>
        </div>
    ) : null
})
