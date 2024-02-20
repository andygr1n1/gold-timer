import { observer } from 'mobx-react-lite'
import { TopGoal } from '../components/TopGoal'
import styles from '../TopGoalsWidgets.module.scss'
import { StyledButton } from '@/components/buttons/StyledButton'
import { useNavigate } from 'react-router-dom'
import { useFetchGoalsByFilter } from '@/modules/goals/service'
import clsx from 'clsx'
import { IconRitual } from '@/assets/icons/IconRitual'

export const TopRitualGoalsWidget: React.FC = observer(() => {
    const navigate = useNavigate()

    const {
        data: { ritual },
    } = useFetchGoalsByFilter({ queryFilter: 'all', limit: 8 })

    if (!ritual?.length) return null

    return (
        <div className='min-h-[350px]flex-[100%] flex max-h-[350px] rounded-md  shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] md:flex-[45%]'>
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
                        startIcon={
                            <IconRitual width={75} height={75} className='min-h-[65px] min-w-[65px] text-teal-600' />
                        }
                    />
                </div>
                <div className={styles['dashboard-widget-goals-container']}>
                    {ritual.slice(0.8).map((goal) => (
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
