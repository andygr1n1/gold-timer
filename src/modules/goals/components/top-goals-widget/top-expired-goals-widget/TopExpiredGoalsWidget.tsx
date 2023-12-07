import { ACTIVE_GOAL_TYPE_ENUM } from '@/helpers/enums'
import { useRootStore } from '@/StoreProvider'
import { observer } from 'mobx-react-lite'
import { TopGoal } from '../TopGoal'
import styles from '../TopGoalsWidgets.module.scss'
import { Icon } from '@iconify/react'
export const TopExpiredGoalsWidget: React.FC = observer(() => {
    const {
        goals$: { topExpiredGoalsWithLimit: topExpiredGoals },
    } = useRootStore()

    return topExpiredGoals.length ? (
        <div className='flex max-h-[400px] min-h-[350px] flex-[100%] md:flex-[45%]'>
            <div className='bg-global-2-bg relative flex h-[calc(100%)] w-[calc(100%-40px)] flex-col items-start justify-start rounded-lg px-5'>
                <div className='absolute left-[-16px] top-[-26px]  cursor-pointer '>
                    <Icon icon='pajamas:expire' width={60} height={60} className='text-amber-600' />
                </div>

                <div className={styles['dashboard-widget-goals-container']}>
                    {topExpiredGoals.length ? (
                        <>
                            {topExpiredGoals.map((goal) => (
                                <TopGoal key={goal.id} goal={goal} type={ACTIVE_GOAL_TYPE_ENUM.EXPIRED} />
                            ))}
                        </>
                    ) : (
                        <div className='absolute-center flex w-full items-center justify-center self-center text-gray-500'>
                            💓 you are awesome! 💓
                        </div>
                    )}
                </div>
            </div>
        </div>
    ) : null
})
