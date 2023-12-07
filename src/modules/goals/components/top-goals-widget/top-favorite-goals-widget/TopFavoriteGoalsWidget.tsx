import { useRootStore } from '@/StoreProvider'
import { observer } from 'mobx-react-lite'

import styles from '../TopGoalsWidgets.module.scss'
import { ACTIVE_GOAL_TYPE_ENUM } from '@/helpers/enums'
import { TopGoal } from '../TopGoal'
import favoriteIcon from '@/assets/heart-favorite.svg'
import { Icon } from '@iconify/react'

export const TopFavoriteGoalsWidget: React.FC = observer(() => {
    const {
        goals$: { topFavoriteGoalsWithLimit },
    } = useRootStore()

    if (!topFavoriteGoalsWithLimit.length) return null
    return (
        <div className='flex max-h-[350px] min-h-[350px] flex-[100%] md:flex-[45%]'>
            <div className='bg-global-2-bg relative flex h-[calc(100%)] w-[calc(100%-40px)] flex-col items-start justify-start rounded-lg px-5'>
                <div className='absolute left-[-20px] top-[-32px]  cursor-pointer'>
                    {/* <img src={favoriteIcon} width={60} height={60} /> */}
                    <Icon icon='line-md:heart-twotone' width={70} height={70} className=' text-rose-600' />
                </div>
                <div className={styles['dashboard-widget-goals-container']}>
                    {
                        topFavoriteGoalsWithLimit.length ? (
                            <>
                                {topFavoriteGoalsWithLimit.map((goal) => (
                                    <TopGoal key={goal.id} goal={goal} type={ACTIVE_GOAL_TYPE_ENUM.FAVORITE} />
                                ))}
                            </>
                        ) : null
                        // <div className='absolute-center  flex w-full items-center justify-center self-center text-gray-500'>
                        //     💛 live your life, no favorites 💛
                        // </div>
                    }
                </div>
            </div>
        </div>
    )
})
