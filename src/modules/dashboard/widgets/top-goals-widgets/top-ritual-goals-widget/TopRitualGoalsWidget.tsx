import { WidgetInfoIcon } from '@/components/icons/WidgetInfoIcon'
import { ACTIVE_GOAL_TYPE_ENUM } from '@/helpers/enums'
import { useGoalsStore } from '@/StoreProvider'
import { truncate } from 'lodash'
import { observer } from 'mobx-react-lite'
import { toggleModalState } from '../../../../../components-modals/goals-list-modal/GoalsListModal'
import styles from '../TopGoalsWidget.module.scss'

export const TopRitualGoalsWidget: React.FC = observer(() => {
    const {
        topRitualGoals,
        onChangeField,
        filter$: { onChangeField: onFilterStoreChangeField },
    } = useGoalsStore()

    const handleModalState = () => {
        onFilterStoreChangeField('goals_collapse_type', ACTIVE_GOAL_TYPE_ENUM.RITUALIZED)
        toggleModalState()
    }

    return (
        <div className={styles['wrapper']}>
            <WidgetInfoIcon
                onClick={handleModalState}
                icon='game-icons:magic-gate'
                iconColor='text-white'
                bgColor='bg-indigo-700 top-3 hover:bg-indigo-600 cursor-pointer'
            />
            <div className={styles['goals-container']}>
                {topRitualGoals.length ? (
                    <>
                        {topRitualGoals.map((goal) => (
                            <div
                                key={goal.id}
                                className={`${styles['goal']} bg-indigo-700 hover:bg-indigo-600`}
                                onClick={() => {
                                    onChangeField('active_collapse_key', goal.id)
                                    handleModalState()
                                }}
                            >
                                {truncate(goal.title, { length: 35 })}
                            </div>
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
