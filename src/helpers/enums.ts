/**
 * use this ENUM to control what type of goals must be rendered in goals collapse list
 */
export enum ACTIVE_GOAL_TYPE_ENUM {
    ACTIVE = 'active',
    EXPIRED = 'expired',
    RITUALIZED = 'ritualized',
    FAVORITE = 'favorite',
}

export enum GOAL_TYPE_ENUM {
    ACTIVE = 'active',
    EXPIRED = 'expired',
    RITUALIZED = 'ritualized',
    FROZEN = 'frozen',
}

export enum PRIVACY_ENUM {
    PUBLIC = 'public',
    PRIVATE = 'private',
    FRIEND_ZONE = 'friendzone',
}

export enum STATUS_ENUM {
    ACTIVE = 'active',
    FINISHED = 'finished',
    COMPLETED = 'completed',
    FROZEN = 'frozen',
    DEPRECATED = 'deprecated',
    FAILED = 'failed',
}

export enum STATUS_ENUM_FILTERS {
    FAVORITE = 'favorite',
    EXPIRED = 'expired',
    ACTIVE = 'active',
    RITUALIZED = 'ritualized',
    FROZEN = 'frozen',
    COMPLETED = 'completed',

    // FINISHED = 'finished',
    // FAILED = 'failed',
}

export enum DIFFICULTY_ENUM {
    LIGHT = 'light',
    MEDIUM = 'medium',
    LEGEND = 'legend',
    EPIC = 'epic',
    STAR = 'star',
    FRIEND_OF_DEATH = 'friend_of_death',
    IMMORTAL = 'immortal',
}

export enum APP_ROUTES_ENUM {
    HOME = '',
    PROFILE = 'profile',
    FRIENDS = 'friends',
    SEARCH = 'search',
    ACHIEVEMENTS = 'achievements',
    TASKS = 'tasks',
    GOALS = 'goals',
    SPRINTS = 'sprints',
    DASHBOARD = 'dashboard',
    SANCTUARY = 'sanctuary',
    BIT_WARDEN = 'bitwarden',
    WALLET = 'wallet',
    SUGGESTIONS = 'suggestions',
    SETTINGS = 'settings',
}

export enum LOG_TYPE_ENUM {
    CREATED = 'created',
    DEPRECATED = 'deprecated',
    ACTIVE = 'active',
    FINISHED = 'finished',
    COMPLETED = 'completed',
    FROZEN = 'frozen',
    FAILED = 'failed',
    RITUALIZED = 'ritualized',
}

export enum RITUAL_TYPE_ENUM {
    INTERVAL_IN_DAYS = 'interval_in_days',
    DAYS_OF_WEEK = 'days_of_week',
}
