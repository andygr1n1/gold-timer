import { StyledButton } from '@/components/buttons/StyledButton'
import clsx from 'clsx'
import { useFetchGoalsByFilter } from '../../../service/fetchGoalsByFilter/useFetchGoalsByFilter'
import { useNavigate } from 'react-router-dom'
import { TopGoal } from '../components/TopGoal'
import { IconFocus } from '@/assets/icons/IconFocus'
import { IconNew } from '@/assets/icons'
import { selectedGoalAtom, selectedGoalAtom$ } from '@/modules/goals/stores/selectedGoal.store'
import { IsLoading } from '@/components/loading/IsLoading'

export const TopActiveGoalsWidget: React.FC = () => {
    const navigate = useNavigate()

    const {
        isLoading,
        data: { active },
    } = useFetchGoalsByFilter({ queryFilter: 'all', limit: 8 })

    return (
        <div
            key={active?.length}
            className='bg-global-2-bg flex max-h-[350px] min-h-[350px] w-full flex-[100%] rounded-md shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] md:flex-[45%]'
        >
            <div className=' relative flex w-full flex-col flex-wrap  gap-5 rounded-lg px-5 pt-10'>
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
                <>
                    {isLoading ? (
                        <IsLoading isLoading={isLoading} />
                    ) : active?.length ? (
                        <>
                            {active.slice(0, 4).map((goal) => (
                                <div key={goal.id}>
                                    <TopGoal
                                        goal={goal}
                                        className={clsx(
                                            goal.isFromFuture && !goal.is_favorite && 'opacity-70 hover:opacity-100',
                                        )}
                                    />
                                </div>
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
                </>
            </div>
        </div>
    )
}
