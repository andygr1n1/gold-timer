import { goal_difficulty_enum, goals, goals_rituals, Scalars } from 'gold-timer-genql/lib/generated'

import { DIFFICULTY_ENUM, RITUAL_TYPE_ENUM } from '@/services/enums'

export type IGoalQueryTypeFilter = 'active' | 'ritual' | 'expired' | 'favorite' | 'completed' | 'deleted' | 'all'

type IGoalRitualOptimized = Partial<Omit<goals_rituals, 'ritual_power' | 'ritual_interval' | 'ritual_type'>> & {
    ritual_interval: Scalars['Int']
    ritual_power: Scalars['Int']
    ritual_type: RITUAL_TYPE_ENUM
}

export type IGoal = Partial<
    Omit<goals, 'goal_ritual' | 'title' | 'finished_at' | 'id' | 'is_favorite' | 'slogan' | 'created_at' | 'deleted_at'>
> & {
    id: string
    title: string
    slogan?: string
    finished_at: string
    goal_ritual?: IGoalRitualOptimized
    is_favorite?: boolean
    status: IGoalQueryTypeFilter
    created_at: string
    deleted_at?: string | null
}

// IInsertNewGoal
export interface IInsertNewGoal {
    id?: string
    title: string
    slogan?: string
    description?: string
    owner_id: string
    status?: IGoalQueryTypeFilter
    finished_at: string | Date
    difficulty?: DIFFICULTY_ENUM
    parent_goal_id?: string | null
    is_favorite?: boolean
    deleted_at?: Date | null
}

export interface IInsertRitual {
    goal_id?: string
    ritual_power?: number
    ritual_interval?: number
    ritual_typ?: RITUAL_TYPE_ENUM
    ritual_id?: string
}

export type IActiveGoals = {
    isLoading: boolean
    isFetching?: boolean
    data: Partial<{
        [key in IGoalQueryTypeFilter]: IGoal[]
    }>
}
