import { resolveData } from '@/functions/resolveData'
import { processError } from '@/functions/processMessage'
import { IGoal, IGoalQueryTypeFilter } from '@/modules/goals/service/types'
import { query_fetchGoalsByFilter } from './query_fetchGoalsByFilter'

export const fabric_goalsByFilter = async (props: {
    limit?: number
    pageParam?: number
    queryFilter?: IGoalQueryTypeFilter
    filterByText: boolean
}): Promise<IGoal[] | null> => {
    const { limit, queryFilter, pageParam, filterByText } = props

    let getGoals: () => Promise<IGoal[] | null> = async () => null
    
    if (queryFilter === 'all') {
        getGoals = () =>
            query_fetchGoalsByFilter({
                offset: pageParam,
                limit,
                filter: { active: true, expired: true, ritual: true, favorite: true },
                filterByText,
            })
    }

    if (queryFilter === 'active') {
        getGoals = () =>
            query_fetchGoalsByFilter({
                offset: pageParam,
                limit,
                filter: { active: true },
                filterByText,
            })
    }

    if (queryFilter === 'expired') {
        getGoals = () =>
            query_fetchGoalsByFilter({
                offset: pageParam,
                limit,
                filter: { expired: true },
                filterByText,
            })
    }

    if (queryFilter === 'ritual') {
        getGoals = () =>
            query_fetchGoalsByFilter({
                offset: pageParam,
                limit,
                filter: { ritual: true },
                filterByText,
            })
    }
    if (queryFilter === 'favorite') {
        getGoals = () =>
            query_fetchGoalsByFilter({
                offset: pageParam,
                limit,
                filter: { favorite: true },
                filterByText,
            })
    }

    if (queryFilter === 'completed') {
        getGoals = () =>
            query_fetchGoalsByFilter({
                offset: pageParam,
                limit,
                filter: {
                    completed: true,
                },
                filterByText,
            })
    }

    if (queryFilter === 'deleted') {
        getGoals = () =>
            query_fetchGoalsByFilter({
                offset: pageParam,
                limit,
                filter: { deleted: true },
                filterByText,
            })
    }

    return await resolveData<null, IGoal[] | null>(
        () => getGoals(),
        (e) => {
            processError(`query_activeGoals: ${e}`)
            return null
        },
    )
}
