import { useRootStore } from '@/StoreProvider'
import { observer } from 'mobx-react-lite'
import { TopGoal } from '../TopGoal'
import styles from '../TopGoalsWidgets.module.scss'
import { Icon } from '@iconify/react'
import { StyledButton } from '@/components/buttons/StyledButton'
export const TopExpiredGoalsWidget: React.FC = observer(() => {
    const {
        goals$: { expiredDashboardGoals, applySelectedWidgetGoals },
    } = useRootStore()

    return expiredDashboardGoals.length ? (
        <div className='flex max-h-[400px] min-h-[350px] flex-[100%] md:flex-[45%]'>
            <div className='bg-global-2-bg relative flex h-[calc(100%)] w-[calc(100%-40px)] flex-col items-start justify-start rounded-lg px-5'>
                <div className='absolute left-[-40px] top-[-42px]  cursor-pointer '>
                    <StyledButton
                        onClick={() => {
                            applySelectedWidgetGoals(expiredDashboardGoals)
                        }}
                        variant='text'
                        className='!h-24 !w-24 !rounded-full'
                        startIcon={
                            <Icon
                                icon='pajamas:expire'
                                width={55}
                                height={55}
                                className='min-h-[55px] min-w-[55px] text-amber-600'
                            />
                        }
                    />
                </div>

                <div className={styles['dashboard-widget-goals-container']}>
                    {expiredDashboardGoals.slice(0, 8).map((goal) => (
                        <TopGoal key={goal.id} goal={goal} />
                    ))}
                </div>
            </div>
        </div>
    ) : null
})
