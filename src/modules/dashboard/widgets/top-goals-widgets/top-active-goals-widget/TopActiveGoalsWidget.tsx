import { WidgetInfoIcon } from '@/components/icons/WidgetInfoIcon'
import { useGoalsStore } from '@/StoreProvider'
import { observer } from 'mobx-react-lite'

import styles from '../TopGoalsWidgets.module.scss'
import { ACTIVE_GOAL_TYPE_ENUM } from '@/helpers/enums'
import { toggleModalState } from '../../../../../components-modals/goals-list-modal/GoalsListModal'
import { TopGoal } from '../TopGoal'

export const TopActiveGoalsWidget: React.FC = observer(() => {
    const {
        filter$: { onChangeField: onFilterStoreChangeField },
        topActiveGoals: { topFour },
    } = useGoalsStore()

    const handleModalState = () => {
        onFilterStoreChangeField('goals_collapse_type', ACTIVE_GOAL_TYPE_ENUM.ACTIVE)
        toggleModalState()
    }

    return (
        <div className={styles['wrapper']}>
            <WidgetInfoIcon
                onClick={handleModalState}
                icon='ic:baseline-rocket-launch'
                iconColor='text-white'
                bgColor='bg-teal-500 hover:bg-teal-400 cursor-pointer'
            />
            <div className={styles['goals-container']}>
                {topFour.length ? (
                    <>
                        {topFour.map((goal) => (
                            <TopGoal key={goal.id} goal={goal} type={ACTIVE_GOAL_TYPE_ENUM.ACTIVE} />
                        ))}
                    </>
                ) : (
                    <div className='absolute-center flex w-full items-center justify-center self-center font-neon text-gray-500'>
                        🍀 take it easy today 🍀
                    </div>
                )}
            </div>
        </div>
    )
})
