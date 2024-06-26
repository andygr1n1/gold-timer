import { IconInfiniteLoading } from '@/assets/icons/IconInfiniteLoading'
import { IGoalQueryTypeFilter } from '@/modules/goals/service/types'
import { useFetchGoalsByFilterInfinity } from '@/modules/goals/service/fetchGoalsByFilter/useFetchGoalsByFilterInfinity'
import React, { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import { TopGoal } from '../../goals-dashboard/components/TopGoal'
import { filteredGoalsFabric } from '@/modules/goals/helpers/filteredGoalsFabric'
import { FormLabel } from '@/components/form/FormLabel'
import { getMonthNumber } from '@/helpers/getMonthNumber.helper'

export const GoalsCards: React.FC<{ state: IGoalQueryTypeFilter }> = ({ state }) => {
    const { ref, inView } = useInView()

    const { isLoading, data, fetchNextPage, hasNextPage } = useFetchGoalsByFilterInfinity({ queryFilter: state })

    useEffect(() => {
        inView && hasNextPage && fetchNextPage()
    }, [inView, hasNextPage])

    const { filteredGoals, timeFrame } = filteredGoalsFabric(data[state])

    return (
        <div className='animate-opacity-3 mx-auto flex w-full flex-col gap-5'>
            {timeFrame.map((tp, index) => {
                // *
                //
                // last ref for intersection observer will trigger infinity scroll
                const lastTimeFrame = timeFrame.length - 1 === index
                const renderGoals = filteredGoals(tp)
                return renderGoals.length ? (
                    <React.Fragment key={tp}>
                        <div>{tp && <FormLabel title={tp} />}</div>
                        {tp && (
                            <div className='bg-global-2-bg-plasma animate-opacity-5 relative'>
                                <div className='absolute-center animate-opacity-5 z-1 text-cText flex h-full w-full items-center justify-center text-2xl opacity-20'>
                                    {tp}
                                </div>
                                <img
                                    loading='lazy'
                                    title={tp}
                                    src={`${import.meta.env.VITE_FIRE_BUNNY_STORAGE}/utility/seasons/${getMonthNumber(
                                        tp.split(' ')[1],
                                    )}.png`}
                                    className='rounded-md animate-opacity-5 z-1 z-10 flex w-full items-center justify-center'
                                />
                            </div>
                        )}
                        <div ref={lastTimeFrame ? ref : undefined} className='flex flex-col gap-5'>
                            {renderGoals.map((goal) => {
                                return (
                                    <TopGoal
                                        zIndex={2000}
                                        key={goal.id}
                                        goal={goal}
                                        className='mx-auto min-h-[60px] !w-full !flex-[100%]'
                                    />
                                )
                            })}
                        </div>
                    </React.Fragment>
                ) : null
            })}

            {isLoading && (
                <div className='flex w-full justify-center'>
                    <IconInfiniteLoading className='animate-opacity-5 text-blue-500' width={44} height={44} />
                </div>
            )}
        </div>
    )
}
