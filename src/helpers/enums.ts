/**
 * use this ENUM to control what type of goals must be rendered in goals collapse list
 */

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

export enum GOAL_STATUS_ENUM {
    ACTIVE = 'active',
    FINISHED = 'finished',
    COMPLETED = 'completed',
    DEPRECATED = 'deprecated',
    FAILED = 'failed',
}

export enum GOAL_STATUS_ENUM_FILTERS {
    ACTIVE = 'active',
    RITUALIZED = 'ritualized',
    EXPIRED = 'expired',
    COMPLETED = 'completed',
    FAVORITE = 'favorite',
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
    LOGIN = 'login',
    REGISTER = 'register',
    RESTORE_ACCOUNT = 'restore_account',
    NEW_PASSWORD = 'new_password',
    HOME = '',
    PROFILE = 'profile',
    ACHIEVEMENTS = 'achievements',
    NOTES = 'notes',
    WEB_CHECKLIST = 'web_checklist',
    GOALS = 'goals',
    SPRINTS = 'sprints',
    DASHBOARD = 'dashboard',
}

export enum RITUAL_TYPE_ENUM {
    INTERVAL_IN_DAYS = 'interval_in_days',
    DAYS_OF_WEEK = 'days_of_week',
}
export enum ADDONS_ENUM {
    GOALS_OF_WEEK = 'goals_of_week',
}

export enum SERVER_ROUTES {
    SPRINT_IMAGE_UPLOAD = 'sprint-image-upload',
    SPRINT_IMAGE_DELETE = 'sprint-image-delete',
    PROFILE_IMAGE_UPLOAD = 'profile-image-upload',
    PROFILE_IMAGE_DELETE = 'profile-image-delete',
    GOAL_SLIDE_IMAGE_UPLOAD = 'goal-slide-image-upload',
    GOAL_SLIDE_IMAGE_DELETE = 'goal-slide-image-delete',
}
