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
    ACTIVE = 'active',
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
    DASHBOARD = 'dashboard',
    E_MONEY = 'money',
}

export enum LOG_TYPE_ENUM {
    CREATED = 'created',
    DEPRECATED = 'deprecated',
}
