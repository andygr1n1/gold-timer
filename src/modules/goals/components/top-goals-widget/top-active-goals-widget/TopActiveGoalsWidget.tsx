import { useRootStore } from '@/StoreProvider'
import { observer } from 'mobx-react-lite'

import styles from '../TopGoalsWidgets.module.scss'
import { StyledButton } from '@/components/buttons/StyledButton'
import clsx from 'clsx'
import { GOAL_STATUS_ENUM_FILTERS } from '@/lib/enums'
import { ActiveIcon } from '../components/Icons'
import { useFetchActiveGoals } from './service/fetch_active_goals/useFetchActiveGoals'
import { TopActiveGoal } from './components/TopActiveGoal'

export const TopActiveGoalsWidget: React.FC = observer(() => {
    const {
        goals$: {
            goals_filter$: { onChangeField },
        },
    } = useRootStore()

    const { activeGoals } = useFetchActiveGoals()

    console.log('activeGoals', activeGoals)
    return (
        <div key={activeGoals.length} className='flex max-h-[350px] min-h-[350px] flex-[100%] md:flex-[45%]'>
            <div className='bg-global-2-bg relative flex h-[calc(100%)] w-[calc(100%-40px)] flex-col items-start justify-start rounded-lg px-5 '>
                <div className='absolute left-[-40px] top-[-43px]  cursor-pointer'>
                    <StyledButton
                        onClick={() => {
                            onChangeField('selected_widget_goals_context', GOAL_STATUS_ENUM_FILTERS.ACTIVE)
                        }}
                        variant='text'
                        className='!h-24 !w-24 !rounded-full'
                        startIcon={<ActiveIcon />}
                    />
                </div>
                <div className={styles['dashboard-widget-goals-container']}>
                    {activeGoals.length ? (
                        <>
                            {activeGoals.slice(0, 8).map((goal) => (
                                <TopActiveGoal
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
