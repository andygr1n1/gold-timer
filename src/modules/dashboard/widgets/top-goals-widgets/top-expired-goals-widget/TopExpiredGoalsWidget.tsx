import { WidgetInfoIcon } from '@/components/icons/WidgetInfoIcon'
import { ACTIVE_GOAL_TYPE_ENUM } from '@/helpers/enums'
import { useGoalsStore } from '@/StoreProvider'
import { truncate } from 'lodash'
import { observer } from 'mobx-react-lite'
import { toggleModalState } from '../goals-list-modal/GoalsListModal'
import styles from '../TopGoalsWidget.module.scss'

export const TopExpiredGoalsWidget: React.FC = observer(() => {
    const {
        onChangeField,
        topExpiredGoals,
        filter$: { onChangeField: onFilterStoreChangeField },
    } = useGoalsStore()

    const handleModalState = () => {
        onFilterStoreChangeField('goals_collapse_type', ACTIVE_GOAL_TYPE_ENUM.EXPIRIED)
        toggleModalState()
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
                            <div
                                key={goal.id}
                                className={`${styles['goal']} bg-rose-700 hover:bg-rose-600`}
                                onClick={() => {
                                    onChangeField('active_collapse_key', goal.id)
                                    handleModalState()
                                }}
                            >
                                {truncate(goal.title, { length: 26 })}
                            </div>
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
