import {
    goal_status_enum_enum,
    goals,
    goals_rituals,
    goal_difficulty_enum_enum,
    privacy_enum_enum,
    Scalars,
    ritual_type_enum_enum,
} from 'gold-timer-genql/lib/generated'

import { RITUAL_TYPE_ENUM } from '@/helpers/enums'
export type IGoalQueryTypeFilter = 'active' | 'ritual' | 'expired' | 'favorite' | 'completed' | 'deleted' | 'all'

export type IGoalRitualOptimized = Partial<Omit<goals_rituals, 'ritual_power' | 'ritual_interval' | 'ritual_type'>> & {
    ritual_interval: Scalars['Int']
    ritual_power: Scalars['Int']
    ritual_type: ritual_type_enum_enum
}

export type IGoalWithRituals = Partial<
    Omit<goals, 'goal_ritual' | 'title' | 'finished_at' | 'id' | 'is_favorite' | 'slogan' | 'created_at' | 'deleted_at'>
> & {
    id: string
    title: string
    slogan?: string
    finished_at: string
    goal_ritual?: IGoalRitualOptimized | null
    is_favorite?: boolean
    status: goal_status_enum_enum
    created_at: string
    deleted_at?: string | null
}

export type IActiveGoalOptimized = IGoalWithRituals & {
    isFromFuture: boolean
    isDeadline: boolean
    totalRemainingDays: number
    createdDaysAgo: number
}

// IInsertNewGoal
export interface IInsertNewGoal {
    id?: string
    title: string
    slogan?: string
    description?: string
    owner_id: string
    privacy?: privacy_enum_enum
    status?: goal_status_enum_enum
    finished_at: Date
    difficulty?: goal_difficulty_enum_enum
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
    data: Partial<{
        [key in IGoalQueryTypeFilter]: IActiveGoalOptimized[]
    }>
}
