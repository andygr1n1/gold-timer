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
    ACTIVATE_REGISTERED_USER = 'register/activation',
    ACTIVATE_PENDING_REGISTERED_USER = 'register/pending',
    RESTORE_ACCOUNT = 'restore',
    NEW_PASSWORD = 'new_password',
    HOME = '',
    PROFILE = 'profile',
    ACHIEVEMENTS = 'achievements',
    NOTES = 'notes',
    STORIES = 'stories',
    NOTIFICATIONS = 'notifications',
    GOALS = 'goals',
    EVENTS = 'events',
    DASHBOARD = 'dashboard',
    ANDREI_GRINI = 'andreigrini',
}

export enum RITUAL_TYPE_ENUM {
    INTERVAL_IN_DAYS = 'interval_in_days',
    DAYS_OF_WEEK = 'days_of_week',
}

export enum SERVER_ROUTES {
    SPRINT_IMAGE_UPLOAD = 'sprint-image-upload',
    SPRINT_IMAGE_DELETE = 'sprint-image-delete',
    PROFILE_IMAGE_UPLOAD = 'profile-image-upload',
    PROFILE_IMAGE_DELETE = 'profile-image-delete',
    GOAL_SLIDE_IMAGE_UPLOAD = 'goal-slide-image-upload',
    GOAL_SLIDE_IMAGE_DELETE = 'goal-slide-image-delete',
    ACH_IMAGE_UPLOAD = 'ach-image-upload',
    STORY_IMAGE_UPLOAD = 'story-image-upload',
    Story_IMAGE_DELETE = 'story-image-delete',
}
