import { useRootStore } from '@/StoreProvider'
import { observer } from 'mobx-react-lite'
import { TopGoal } from '../TopGoal'
import styles from '../TopGoalsWidgets.module.scss'
import clsx from 'clsx'
import { Icon } from '@iconify/react'
import { StyledButton } from '@/components/buttons/StyledButton'

export const TopRitualGoalsWidget: React.FC = observer(() => {
    const {
        goals$: { ritualDashboardGoals, applySelectedWidgetGoals },
    } = useRootStore()

    if (!ritualDashboardGoals.length) return null

    return (
        <div className='min-h-[350px]flex-[100%] flex  max-h-[350px] md:flex-[45%]'>
            <div className='bg-global-2-bg relative flex h-[calc(100%)] w-[calc(100%-40px)] flex-col items-start justify-start rounded-lg px-5'>
                <div className='absolute left-[-40px] top-[-40px] cursor-pointer'>
                    {/* <Icon icon='line-md:circle-twotone' width={70} height={70} className=' text-teal-600' /> */}
                    <StyledButton
                        onClick={() => {
                            applySelectedWidgetGoals(ritualDashboardGoals)
                        }}
                        variant='text'
                        className='!h-24 !w-24 !rounded-full'
                        startIcon={
                            <Icon
                                icon='line-md:circle-twotone'
                                width={66}
                                height={66}
                                className='min-h-[64px] min-w-[64px] text-teal-600'
                            />
                        }
                    />
                </div>
                <div className={clsx(styles['dashboard-widget-goals-container'])}>
                    {ritualDashboardGoals.slice(0.8).map((goal) => (
                        <TopGoal
                            key={goal.id}
                            goal={goal}
                            className={clsx(goal.isFromFuture && 'opacity-70 hover:opacity-100')}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
})
