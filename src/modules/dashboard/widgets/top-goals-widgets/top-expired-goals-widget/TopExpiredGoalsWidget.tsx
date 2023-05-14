import { WidgetInfoIcon } from '@/components/icons/WidgetInfoIcon'
import { ACTIVE_GOAL_TYPE_ENUM } from '@/helpers/enums'
import { useGoalsStore } from '@/StoreProvider'
import { observer } from 'mobx-react-lite'
import { toggleGoalsListModalVisibility } from '../../../../../components-modals/goals-list-modal/GoalsListModal'
import { TopGoal } from '../TopGoal'
import styles from '../TopGoalsWidgets.module.scss'

export const TopExpiredGoalsWidget: React.FC = observer(() => {
    const {
        topExpiredGoals,
        filter$: { onChangeField: onFilterStoreChangeField },
    } = useGoalsStore()

    const handleModalState = () => {
        onFilterStoreChangeField('goals_collapse_type', ACTIVE_GOAL_TYPE_ENUM.EXPIRED)
        toggleGoalsListModalVisibility()
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
