import { resolveData } from '@/functions/resolveData'
import { processError } from '@/functions/processMessage'
import { IActiveGoalOptimized, IGoalQueryTypeFilter } from '@/modules/goals/interfaces/types'
import { query_fetchGoalsByFilter } from './query_fetchGoalsByFilter'

export const fabric_goalsByFilter = async (props: {
    limit?: number
    pageParam?: number
    queryFilter?: IGoalQueryTypeFilter
}): Promise<IActiveGoalOptimized[] | null> => {
    const { limit, queryFilter, pageParam } = props

    let getGoals: () => Promise<IActiveGoalOptimized[] | null> = async () => null

    if (queryFilter === 'all') {
        getGoals = () =>
            query_fetchGoalsByFilter({
                offset: pageParam,
                limit,
                filter: { active: true, expired: true, ritual: true, favorite: true },
            })
    }

    if (queryFilter === 'active') {
        getGoals = () =>
            query_fetchGoalsByFilter({
                offset: pageParam,
                limit,
                filter: { active: true, expired: false, ritual: false, favorite: false },
            })
    }

    if (queryFilter === 'expired') {
        getGoals = () =>
            query_fetchGoalsByFilter({
                offset: pageParam,
                limit,
                filter: { active: false, expired: true, ritual: false, favorite: false },
            })
    }

    if (queryFilter === 'ritual') {
        getGoals = () =>
            query_fetchGoalsByFilter({
                offset: pageParam,
                limit,
                filter: { active: false, expired: false, ritual: true, favorite: false },
            })
    }
    if (queryFilter === 'favorite') {
        getGoals = () =>
            query_fetchGoalsByFilter({
                offset: pageParam,
                limit,
                filter: { active: false, expired: false, ritual: false, favorite: true },
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
