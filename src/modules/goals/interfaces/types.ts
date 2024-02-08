import {
    goal_status_enum_enum,
    goals,
    goals_rituals,
    goal_difficulty_enum_enum,
    privacy_enum_enum,
} from '@/graphql/generated'
import { RITUAL_TYPE_ENUM } from '@/lib/enums'
export type IGoalQueryTypeFilter = 'active' | 'ritual' | 'expired' | 'favorite' | 'completed' | 'deleted' | 'all'

export type IGoalWithRituals = Partial<
    Omit<goals, 'goal_ritual' | 'title' | 'finished_at' | 'id' | 'is_favorite' | 'slogan' | 'created_at'>
> & {
    id: string
    title: string
    slogan?: string
    finished_at: string
    goal_ritual?: Partial<goals_rituals> | null
    is_favorite?: boolean
    status: goal_status_enum_enum
    created_at?: string
}

export type IActiveGoalOptimized = IGoalWithRituals & {
    isFromFuture: boolean
    isDeadline: boolean
    totalRemainingDays: number
    createdDaysAgo: number
    isExpired?: boolean
    isRitual?: boolean
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
