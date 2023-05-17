import { WidgetInfoIcon } from '@/components/icons/WidgetInfoIcon'
import { useRootStore } from '@/StoreProvider'
import { observer } from 'mobx-react-lite'

import styles from '../TopGoalsWidgets.module.scss'
import { ACTIVE_GOAL_TYPE_ENUM } from '@/helpers/enums'
import { TopGoal } from '../TopGoal'

export const TopFavoriteGoalsWidget: React.FC = observer(() => {
    const {
        goals$: {
            filter$: { onChangeField: onFilterStoreChangeField },
            topFavoriteGoals,
        },
        modal_windows$: { goals_manager_mw$ },
    } = useRootStore()

    const handleModalState = () => {
        onFilterStoreChangeField('goals_collapse_type', ACTIVE_GOAL_TYPE_ENUM.FAVORITE)
        goals_manager_mw$.onChangeField('visible', true)
    }

    return (
        <div className={styles['wrapper']}>
            {topFavoriteGoals.length ? (
                <WidgetInfoIcon
                    disabled={!topFavoriteGoals.length}
                    onClick={handleModalState}
                    icon='mdi:luck'
                    iconColor='text-rose-600'
                    bgColor='bg-amber-500 hover:bg-amber-400  cursor-pointer'
                />
            ) : null}

            <div className={styles['goals-container']}>
                {topFavoriteGoals.length ? (
                    <>
                        {topFavoriteGoals.map((goal) => (
                            <TopGoal key={goal.id} goal={goal} type={ACTIVE_GOAL_TYPE_ENUM.FAVORITE} />
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
