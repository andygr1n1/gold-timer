import { useRootStore } from '@/StoreProvider'
import { observer } from 'mobx-react-lite'

import styles from '../TopGoalsWidgets.module.scss'
import { ACTIVE_GOAL_TYPE_ENUM } from '@/helpers/enums'
import { TopGoal } from '../TopGoal'
import { Icon } from '@iconify/react'

export const TopActiveGoalsWidget: React.FC = observer(() => {
    const {
        goals$: { topActiveGoalsWithLimit },
    } = useRootStore()

    return (
        <div className='flex max-h-[350px] min-h-[350px] flex-[100%] md:flex-[45%]'>
            <div
                className='bg-global-2-bg relative flex h-[calc(100%)] w-[calc(100%-40px)] flex-col items-start justify-start rounded-lg
            px-5 '
            >
                <div className='absolute left-[-25px] top-[-26px]  cursor-pointer'>
                    <Icon icon='line-md:my-location' width={66} height={66} className='text-blue-600' />
                </div>
                <div className={styles['dashboard-widget-goals-container']}>
                    {topActiveGoalsWithLimit.length ? (
                        <>
                            {topActiveGoalsWithLimit.map((goal) => (
                                <TopGoal key={goal.id} goal={goal} type={ACTIVE_GOAL_TYPE_ENUM.ACTIVE} />
                            ))}
                        </>
                    ) : (
                        <div className='absolute-center  flex w-full items-center justify-center self-center text-gray-500'>
                            🍀 take it easy today, no goals 🍀
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
})
