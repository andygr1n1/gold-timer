import { useRootStore } from '@/StoreProvider'
import { observer } from 'mobx-react-lite'

import styles from '../TopGoalsWidgets.module.scss'
import { TopGoal } from '../TopGoal'
import { Icon } from '@iconify/react'
import { StyledButton } from '@/components/buttons/StyledButton'
import clsx from 'clsx'

export const TopActiveGoalsWidget: React.FC = observer(() => {
    const {
        goals$: { activeDashboardGoals, applySelectedWidgetGoals },
    } = useRootStore()

    return (
        <div key={activeDashboardGoals.length} className='flex max-h-[350px] min-h-[350px] flex-[100%] md:flex-[45%]'>
            <div
                className='bg-global-2-bg relative flex h-[calc(100%)] w-[calc(100%-40px)] flex-col items-start justify-start rounded-lg
            px-5 '
            >
                <div className='absolute left-[-40px] top-[-43px]  cursor-pointer'>
                    <StyledButton
                        onClick={() => {
                            applySelectedWidgetGoals(activeDashboardGoals)
                        }}
                        variant='text'
                        className='!h-24 !w-24 !rounded-full'
                        startIcon={
                            <Icon
                                icon='line-md:my-location'
                                width={76}
                                height={76}
                                className='min-h-[66px] min-w-[66px] text-blue-600'
                            />
                        }
                    />
                </div>
                <div className={styles['dashboard-widget-goals-container']}>
                    {activeDashboardGoals.length ? (
                        <>
                            {activeDashboardGoals.slice(0, 8).map((goal) => (
                                <TopGoal
                                    key={goal.id}
                                    goal={goal}
                                    className={clsx(goal.isFromFuture && 'opacity-70 hover:opacity-100')}
                                />
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
