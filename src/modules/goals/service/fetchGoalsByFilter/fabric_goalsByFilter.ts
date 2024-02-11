import { resolveData } from '@/functions/resolveData'
import { processError } from '@/functions/processMessage'
import { IActiveGoalOptimized, IGoalQueryTypeFilter } from '@/modules/goals/interfaces/types'
// import { query_fetchActiveGoals } from './filters/query_fetchActiveGoals'
// import { query_fetchFavoriteGoals } from './filters/query_fetchFavoriteGoals'
import { query_fetchGoalsByFilter } from './query_fetchGoalsByFilter'

export const fabric_goalsByFilter = async (props: {
    limit?: number
    queryFilter?: IGoalQueryTypeFilter
}): Promise<IActiveGoalOptimized[] | null> => {
    const { limit, queryFilter } = props

    let getGoals: () => Promise<IActiveGoalOptimized[] | null> = async () => null

    if (queryFilter === 'all') {
        getGoals = () =>
            query_fetchGoalsByFilter({ limit, filter: { active: true, expired: true, ritual: true, favorite: true } })
    }

    // if (queryFilter === 'active') {
    //     getGoals = () => query_fetchActiveGoals(limit)
    // }

    // if (queryFilter === 'favorite') {
    //     getGoals = () => query_fetchFavoriteGoals(limit)
    // }

    return await resolveData<null, IActiveGoalOptimized[] | null>(
        () => getGoals(),
        (e) => {
            processError(`query_activeGoals: ${e}`)
            return null
        },
    )
}
