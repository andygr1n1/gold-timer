import styles from '../TopGoalsWidgets.module.scss'
import { StyledButton } from '@/components/buttons/StyledButton'
import clsx from 'clsx'
import { useFetchGoalsByFilter } from '../../../service/fetchGoalsByFilter/useFetchGoalsByFilter'
import { useNavigate } from 'react-router-dom'
import { TopGoal } from '../components/TopGoal'
import { IconFocus } from '@/assets/icons/IconFocus'
import { IconNew } from '@/assets/icons'
import { selectedGoalAtom, selectedGoalAtom$ } from '@/modules/goals/stores/selectedGoal.store'

export const TopActiveGoalsWidget: React.FC = () => {
    const navigate = useNavigate()

    const {
        data: { active },
    } = useFetchGoalsByFilter({ queryFilter: 'all', limit: 8 })

    return (
        <div
            key={active?.length}
            className='flex max-h-[350px] min-h-[350px] flex-[100%] rounded-md shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] md:flex-[45%]'
        >
            <div className='bg-global-2-bg relative flex h-[calc(100%)] w-[calc(100%-40px)] flex-col items-start justify-start rounded-lg px-5 '>
                {!!active?.length && (
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
                            startIcon={
                                <IconFocus width={76} height={76} className='min-h-[66px] min-w-[66px] text-blue-600' />
                            }
                        />
                    </div>
                )}
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
                        <div className='absolute-center flex  w-full flex-col items-center justify-center gap-2 self-center text-gray-500'>
                            <StyledButton
                                variant='text'
                                className='!h-[64px]  opacity-70'
                                onClick={() =>
                                    selectedGoalAtom$.set(selectedGoalAtom, {
                                        id: crypto.randomUUID(),
                                        is_edit: true,
                                        is_new: true,
                                    })
                                }
                                startIcon={<IconNew width={64} height={64} className=' group-hover:text-amber-500' />}
                            />
                            <span className='text-cText cursor-default opacity-70'>Create goal</span>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}
