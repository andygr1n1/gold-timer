import { useRootStore } from '@/StoreProvider'
import { observer } from 'mobx-react-lite'
import { TopGoal } from '../TopGoal'
import styles from '../TopGoalsWidgets.module.scss'
import clsx from 'clsx'
import { StyledButton } from '@/components/buttons/StyledButton'
import { GOAL_STATUS_ENUM_FILTERS } from '@/lib/enums'
import { RitualIcon } from '../components/Icons'

export const TopRitualGoalsWidget: React.FC = observer(() => {
    const {
        goals$: {
            goals_filter$: { onChangeField, ritualDashboardGoals },
        },
    } = useRootStore()

    if (!ritualDashboardGoals.length) return null

    return (
        <div className='min-h-[350px]flex-[100%] flex  max-h-[350px] md:flex-[45%]'>
            <div className='bg-global-2-bg relative flex h-[calc(100%)] w-[calc(100%-40px)] flex-col items-start justify-start rounded-lg px-5'>
                <div className='absolute left-[-40px] top-[-40px] cursor-pointer'>
                    <StyledButton
                        onClick={() => {
                            onChangeField('selected_widget_goals_context', GOAL_STATUS_ENUM_FILTERS.RITUALIZED)
                        }}
                        variant='text'
                        className='!h-24 !w-24 !rounded-full'
                        startIcon={<RitualIcon />}
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
