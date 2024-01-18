import { useRootStore } from '@/StoreProvider'
import { observer } from 'mobx-react-lite'
import { TopGoal } from '../TopGoal'
import styles from '../TopGoalsWidgets.module.scss'
import { StyledButton } from '@/components/buttons/StyledButton'
import { GOAL_STATUS_ENUM_FILTERS } from '@/lib/enums'
import { ExpiredIcon } from '../components/Icons'
export const TopExpiredGoalsWidget: React.FC = observer(() => {
    const {
        goals$: {
            goals_filter$: { onChangeField, expiredDashboardGoals },
        },
    } = useRootStore()

    return expiredDashboardGoals.length ? (
        <div className='flex max-h-[350px] min-h-[350px] flex-[100%] md:flex-[45%]'>
            <div className='bg-global-2-bg relative flex h-[calc(100%)] w-[calc(100%-40px)] flex-col items-start justify-start rounded-lg px-5'>
                <div className='absolute left-[-40px] top-[-42px]  cursor-pointer '>
                    <StyledButton
                        onClick={() => {
                            onChangeField('selected_widget_goals_context', GOAL_STATUS_ENUM_FILTERS.EXPIRED)
                        }}
                        variant='text'
                        className='!h-24 !w-24 !rounded-full'
                        startIcon={<ExpiredIcon />}
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
