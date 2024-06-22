import { optimizeActiveGoalsData } from '@/modules/goals/helpers/optimizeActiveGoalsData'
import { IGoal } from '@/modules/goals/service/types'
import { compact, uniqWith } from 'lodash-es'
import { query_activeGoals } from './filters/query_activeGoals'
import { query_expiredGoals } from './filters/query_expiredGoals'
import { query_ritualGoals } from './filters/query_ritualGoals'
import { query_favoriteGoals } from './filters/query_favoriteGoals'
import { generateTSClient } from '@/graphql/client'
import { query_completedGoals } from './filters/query_completedGoals'
import { query_deletedGoals } from './filters/query_deletedGoals'

export const query_fetchGoalsByFilter = async (props: {
    offset?: number
    limit?: number
    filter: {
        active?: boolean
        favorite?: boolean
        expired?: boolean
        ritual?: boolean
        completed?: boolean
        deleted?: boolean
    }
    filterByText: boolean
}): Promise<IGoal[] | null> => {
    const { limit, filter, offset, filterByText } = props
    const client = await generateTSClient({ batch: true })
    const res = await Promise.all(
        compact([
            query_activeGoals({ client, queryIsActive: filter.active, limit, offset, filterByText }),
            query_expiredGoals({ client, queryIsActive: filter.expired, limit, offset, filterByText }),
            query_ritualGoals({ client, queryIsActive: filter.ritual, limit, offset, filterByText }),
            query_favoriteGoals({ client, queryIsActive: filter.favorite, limit, offset, filterByText }),
            query_completedGoals({ client, queryIsActive: filter.completed, limit, offset, filterByText }),
            query_deletedGoals({ client, queryIsActive: filter.deleted, limit, offset, filterByText }),
        ]),
    )

    const data: IGoal[] = res.reduce(
        (acc, r) => [...acc, ...optimizeActiveGoalsData(r.goals as IGoal[])],
        [] as IGoal[],
    )

    return uniqWith(data, (a, b) => a.id === b.id)
}
