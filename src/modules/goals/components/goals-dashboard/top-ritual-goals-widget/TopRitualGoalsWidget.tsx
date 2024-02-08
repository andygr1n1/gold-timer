import { observer } from 'mobx-react-lite'
import { TopGoal } from '../components/TopGoal'
import styles from '../TopGoalsWidgets.module.scss'
import { StyledButton } from '@/components/buttons/StyledButton'
import { RitualIcon } from '../components/Icons'
import { useNavigate } from 'react-router-dom'
import { useFetchGoalsByFilter } from '@/modules/goals/service'
import clsx from 'clsx'

export const TopRitualGoalsWidget: React.FC = observer(() => {
    const navigate = useNavigate()

    const {
        data: { ritualGoals },
    } = useFetchGoalsByFilter({ queryFilter: 'all' })

    if (!ritualGoals.length) return null

    return (
        <div className='min-h-[350px]flex-[100%] flex  max-h-[350px] md:flex-[45%]'>
            <div className='bg-global-2-bg relative flex h-[calc(100%)] w-[calc(100%-40px)] flex-col items-start justify-start rounded-lg px-5'>
                <div className='absolute left-[-40px] top-[-40px] cursor-pointer'>
                    <StyledButton
                        onClick={() => {
                            navigate(
                                { pathname: '/dashboard/filtered-goals', search: `?filter=ritual` },
                                { state: { filter: 'ritual' } },
                            )
                        }}
                        variant='text'
                        className='!h-24 !w-24 !rounded-full'
                        startIcon={<RitualIcon />}
                    />
                </div>
                <div className={styles['dashboard-widget-goals-container']}>
                    {ritualGoals.slice(0.8).map((goal) => (
                        <TopGoal
                            key={goal.id}
                            goal={goal}
                            className={clsx(goal.isFromFuture && 'opacity-50 hover:opacity-100')}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
})
