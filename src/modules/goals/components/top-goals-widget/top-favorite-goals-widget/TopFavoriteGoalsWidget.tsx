import { useRootStore } from '@/StoreProvider'
import { observer } from 'mobx-react-lite'

import styles from '../TopGoalsWidgets.module.scss'
import { ACTIVE_GOAL_TYPE_ENUM } from '@/helpers/enums'
import { TopGoal } from '../TopGoal'
import { WidgetSvgIcon } from '@/components/icons/WidgetSvgIcon'
import favoriteIcon from '@/assets/heart-favorite.svg'

export const TopFavoriteGoalsWidget: React.FC = observer(() => {
    const {
        goals$: {
            goals_filter$: { onChangeField: onFilterStoreChangeField },
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
            {<WidgetSvgIcon onClick={handleModalState} icon={favoriteIcon} />}

            <div className={styles['goals-container']}>
                {topFavoriteGoals.length ? (
                    <>
                        {topFavoriteGoals.map((goal) => (
                            <TopGoal key={goal.id} goal={goal} type={ACTIVE_GOAL_TYPE_ENUM.FAVORITE} />
                        ))}
                    </>
                ) : (
                    <div className='absolute-center  flex w-full items-center justify-center self-center text-gray-500'>
                        💛 live your life, no favorites 💛
                    </div>
                )}
            </div>
        </div>
    )
})
