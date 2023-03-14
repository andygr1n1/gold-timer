import { WidgetInfoIcon } from '@/components/icons/WidgetInfoIcon'
import { useGoalsStore } from '@/StoreProvider'
import { truncate } from 'lodash'
import { observer } from 'mobx-react-lite'

import styles from '../TopGoalsWidget.module.scss'
import { ACTIVE_GOAL_TYPE_ENUM } from '@/helpers/enums'
import { toggleModalState } from '../../../../../components-modals/goals-list-modal/GoalsListModal'

export const TopFavoriteGoalsWidget: React.FC = observer(() => {
    const {
        onChangeField,
        filter$: { onChangeField: onFilterStoreChangeField },
        topFavoriteGoals,
    } = useGoalsStore()

    const handleModalState = () => {
        onFilterStoreChangeField('goals_collapse_type', ACTIVE_GOAL_TYPE_ENUM.FAVORITE)
        toggleModalState()
    }

    return (
        <div className={styles['wrapper']}>
            <WidgetInfoIcon
                onClick={handleModalState}
                icon='mdi:luck'
                iconColor='text-rose-600'
                bgColor='bg-amber-500 hover:bg-amber-400  cursor-pointer'
            />
            <div className={styles['goals-container']}>
                {topFavoriteGoals.length ? (
                    <>
                        {topFavoriteGoals.map((goal) => (
                            <div
                                key={goal.id}
                                className={`${styles['goal']} bg-amber-500 hover:bg-amber-400`}
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
                        💛 live your life 💛
                    </div>
                )}
            </div>
        </div>
    )
})
