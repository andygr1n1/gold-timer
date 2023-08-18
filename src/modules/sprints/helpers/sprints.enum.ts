export enum SPRINT_STATUS_ENUM {
    ACTIVE = 'active',
    COMPLETED = 'completed',
    FINISHED = 'finished',
    FUTURE = 'future',
    FREEZED = 'freezed',
    CHECKED = 'checked',
    ERROR = 'error',
}

export type SPRINT_FILTER_STATUS_TYPE = 'all' | 'active' | 'completed' | 'finished' | 'future' | 'freezed' | 'checked'
