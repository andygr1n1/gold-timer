import { observer } from 'mobx-react-lite'

import styles from '../TopGoalsWidgets.module.scss'
import { StyledButton } from '@/components/buttons/StyledButton'
import clsx from 'clsx'
import { ActiveIcon } from '../components/Icons'
import { useFetchGoalsByFilter } from '../../../service/fetchGoalsByFilter/useFetchGoalsByFilter'
import { useNavigate } from 'react-router-dom'
import { TopGoal } from '../components/TopGoal'

export const TopActiveGoalsWidget: React.FC = observer(() => {
    const navigate = useNavigate()

    const {
        data: { active },
    } = useFetchGoalsByFilter({ queryFilter: 'all', limit: 8 })

    return (
        <div key={active?.length} className='flex max-h-[350px] min-h-[350px] flex-[100%] md:flex-[45%]'>
            <div className='bg-global-2-bg relative flex h-[calc(100%)] w-[calc(100%-40px)] flex-col items-start justify-start rounded-lg px-5 '>
                <div className='absolute left-[-40px] top-[-43px]  cursor-pointer'>
                    <StyledButton
                        onClick={() => {
                            navigate(
                                { pathname: '/dashboard/filtered-goals', search: `?filter=active` },
                                { state: { filter: 'active' } },
                            )
                        }}
                        variant='text'
                        className='!h-24 !w-24 !rounded-full'
                        startIcon={<ActiveIcon />}
                    />
                </div>
                <div className={styles['dashboard-widget-goals-container']}>
                    {active?.length ? (
                        <>
                            {active.slice(0, 8).map((goal) => (
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
