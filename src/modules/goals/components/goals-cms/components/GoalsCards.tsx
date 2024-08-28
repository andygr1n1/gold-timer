import React, { useEffect } from 'react'
import { type IGoalStatus } from '@/modules/goals/shared-service/types'
import { useFetchGoals } from '@/modules/goals/shared-service/fetch-goals/useFetchGoals'
import { useInView } from 'react-intersection-observer'
import { TopGoal } from '../../goals-dashboard/components/TopGoal'
import { filteredGoalsFabric } from '@/modules/goals/helpers/filteredGoalsFabric'
import { FormLabel } from '@/components/form/FormLabel'
import { getMonthNumber } from '@/helpers/getMonthNumber.helper'
import { useGoalsFilters } from '../stores/useGoalsFilters.store'
import { IsLoading } from '@/components/loading/IsLoading'

export const GoalsCards: React.FC<{ queryFilter: IGoalStatus }> = ({ queryFilter }) => {
    const { serverSearchInput } = useGoalsFilters()
    const { isLoading, goals, fetchNextPage, hasNextPage } = useFetchGoals({
        queryFilter,
        // very important to set this limit also for invalidation
        limit: 20,
        serverSearchInput,
    })

    const { ref, inView } = useInView()

    useEffect(() => {
        inView && hasNextPage && fetchNextPage()
    }, [inView, hasNextPage])

    const { filteredGoals, timeFrame } = filteredGoalsFabric(goals)

    return (
        <div className='animate-opacity-3 mx-auto flex w-full flex-col gap-5'>
            {timeFrame.map((tp) => {
                const renderGoals = filteredGoals(tp)
                return renderGoals.length ? (
                    <React.Fragment key={tp}>
                        <div>{tp && <FormLabel title={tp} />}</div>
                        {tp && (
                            <div className='bg-global-2-bg-plasma animate-opacity-5 relative'>
                                <img
                                    loading='lazy'
                                    title={tp}
                                    src={`/img/seasons/${getMonthNumber(tp.split(' ')[1])}.png`}
                                    className='rounded-md animate-opacity-5 z-1 z-10 flex w-full items-center justify-center'
                                />
                            </div>
                        )}
                        <div className='flex flex-col gap-5'>
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

            <div ref={ref} className='flex relative w-full min-h-[100px] justify-center'>
                <IsLoading isLoading={isLoading} />
            </div>
        </div>
    )
}
