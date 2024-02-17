import { IActiveGoalOptimized, IGoalQueryTypeFilter } from '../interfaces/types'

export type IActiveGoals = {
    isLoading: boolean
    data: Partial<{
        [key in IGoalQueryTypeFilter]: IActiveGoalOptimized[]
    }>
}
