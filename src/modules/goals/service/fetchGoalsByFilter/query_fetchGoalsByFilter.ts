import { optimizeActiveGoalsData } from '@/modules/goals/helpers/optimizeActiveGoalsData'
import { IActiveGoalOptimized } from '@/modules/goals/interfaces/types'
import { compact, uniqWith } from 'lodash-es'
import { query_activeGoals } from './filters/query_activeGoals'
import { query_expiredGoals } from './filters/query_expiredGoals'
import { query_ritualGoals } from './filters/query_ritualGoals'
import { query_favoriteGoals } from './filters/query_favoriteGoals'
import { generateTSClient } from '@/graphql/client'

// *
// The main reason is to always have at least 8 goals in each filter
export const query_fetchGoalsByFilter = async (props: {
    limit?: number
    filter: { active: boolean; favorite: boolean; expired: boolean; ritual: boolean }
}): Promise<IActiveGoalOptimized[] | null> => {
    const { limit, filter } = props
    const client = generateTSClient({ batch: true })

    const res = await Promise.all(
        compact([
            query_activeGoals(client, filter.active, limit),
            query_expiredGoals(client, filter.expired, limit),
            query_ritualGoals(client, filter.ritual, limit),
            query_favoriteGoals(client, filter.favorite, limit),
        ]),
    )

    const data: IActiveGoalOptimized[] = res.reduce(
        (acc, r) => [...acc, ...optimizeActiveGoalsData(r.goals)],
        [] as IActiveGoalOptimized[],
    )

    return uniqWith(data, (a, b) => a.id === b.id)
}
