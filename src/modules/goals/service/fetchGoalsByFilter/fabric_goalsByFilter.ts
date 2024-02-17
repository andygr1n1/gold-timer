import { resolveData } from '@/functions/resolveData'
import { processError } from '@/functions/processMessage'
import { IActiveGoalOptimized, IGoalQueryTypeFilter } from '@/modules/goals/service/types'
import { query_fetchGoalsByFilter } from './query_fetchGoalsByFilter'

export const fabric_goalsByFilter = async (props: {
    limit?: number
    pageParam?: number
    queryFilter?: IGoalQueryTypeFilter
    filterByText: boolean
}): Promise<IActiveGoalOptimized[] | null> => {
    const { limit, queryFilter, pageParam, filterByText } = props

    let getGoals: () => Promise<IActiveGoalOptimized[] | null> = async () => null

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
                filter: { active: true, expired: false, ritual: false, favorite: false },
                filterByText,
            })
    }

    if (queryFilter === 'expired') {
        getGoals = () =>
            query_fetchGoalsByFilter({
                offset: pageParam,
                limit,
                filter: { active: false, expired: true, ritual: false, favorite: false },
                filterByText,
            })
    }

    if (queryFilter === 'ritual') {
        getGoals = () =>
            query_fetchGoalsByFilter({
                offset: pageParam,
                limit,
                filter: { active: false, expired: false, ritual: true, favorite: false },
                filterByText,
            })
    }
    if (queryFilter === 'favorite') {
        getGoals = () =>
            query_fetchGoalsByFilter({
                offset: pageParam,
                limit,
                filter: { active: false, expired: false, ritual: false, favorite: true },
                filterByText,
            })
    }

    return await resolveData<null, IActiveGoalOptimized[] | null>(
        () => getGoals(),
        (e) => {
            processError(`query_activeGoals: ${e}`)
            return null
        },
    )
}
