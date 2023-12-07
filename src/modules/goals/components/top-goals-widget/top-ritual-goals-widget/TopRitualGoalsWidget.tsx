import { ACTIVE_GOAL_TYPE_ENUM } from '@/helpers/enums'
import { useRootStore } from '@/StoreProvider'
import { observer } from 'mobx-react-lite'
import { TopGoal } from '../TopGoal'
import styles from '../TopGoalsWidgets.module.scss'
import ritualLogoIcon from '@/assets/ritual-logo.svg'
import clsx from 'clsx'
import { Icon } from '@iconify/react'

export const TopRitualGoalsWidget: React.FC = observer(() => {
    const {
        goals$: { topRitualGoalsWithLimit: topRitualGoals },
    } = useRootStore()

    if (!topRitualGoals.length) return null

    return (
        <div className='min-h-[350px]flex-[100%] flex  max-h-[350px] md:flex-[45%]'>
            <div className='bg-global-2-bg relative flex h-[calc(100%)] w-[calc(100%-40px)] flex-col items-start justify-start rounded-lg px-5'>
                <div className='absolute left-[-30px] top-[-26px] cursor-pointer'>
                    {/* <img src={ritualLogoIcon} width={64} height={64} className='opacity-70' /> */}
                    <Icon icon='line-md:circle-twotone' width={70} height={70} className=' text-teal-600' />
                    {/* <Icon icon='line-md:circle-twotone' width={70} height={70} className='text-teal-600' /> */}
                </div>
                <div className={clsx(styles['dashboard-widget-goals-container'])}>
                    {
                        topRitualGoals.length ? (
                            <>
                                {topRitualGoals.map((goal) => (
                                    <TopGoal key={goal.id} goal={goal} type={ACTIVE_GOAL_TYPE_ENUM.RITUALIZED} />
                                ))}
                            </>
                        ) : null
                        // <div className='absolute-center  flex w-full items-center justify-center self-center text-gray-500'>
                        //     💫 enjoy the moment, no rituals 💫
                        // </div>
                    }
                </div>
            </div>
        </div>
    )
})
