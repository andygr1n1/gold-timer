import { WidgetInfoIcon } from '@/components/icons/WidgetInfoIcon'
import { ACTIVE_GOAL_TYPE_ENUM } from '@/helpers/enums'
import { useGoalsStore } from '@/StoreProvider'
import { observer } from 'mobx-react-lite'
import { toggleGoalsListModalVisibility } from '../../../../../components-modals/goals-list-modal/GoalsListModal'
import { TopGoal } from '../TopGoal'
import styles from '../TopGoalsWidgets.module.scss'

export const TopRitualGoalsWidget: React.FC = observer(() => {
    const {
        topRitualGoals,
        filter$: { onChangeField: onFilterStoreChangeField },
    } = useGoalsStore()

    const handleModalState = () => {
        onFilterStoreChangeField('goals_collapse_type', ACTIVE_GOAL_TYPE_ENUM.RITUALIZED)
        toggleGoalsListModalVisibility()
    }

    return (
        <div className={styles['wrapper']}>
            <WidgetInfoIcon
                onClick={handleModalState}
                icon='game-icons:magic-gate'
                iconColor='text-white'
                bgColor='bg-indigo-700 hover:bg-indigo-600 cursor-pointer -left-5'
            />
            <div className={styles['goals-container']}>
                {topRitualGoals.length ? (
                    <>
                        {topRitualGoals.map((goal) => (
                            <TopGoal key={goal.id} goal={goal} type={ACTIVE_GOAL_TYPE_ENUM.RITUALIZED} />
                        ))}
                    </>
                ) : (
                    <div className='absolute-center flex w-full items-center justify-center self-center font-neon text-gray-500'>
                        💫 enjoy the moment 💫
                    </div>
                )}
            </div>
        </div>
    )
})
