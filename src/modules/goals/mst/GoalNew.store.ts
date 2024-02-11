import { Goal$ } from './Goal.store'

export const GoalNew$ = Goal$.named('GoalNew$')
    .views((self) => ({
        get goalDataValidator(): boolean {
            return !!self.title.length && !!self.finished_at
        },
    }))
    .actions((self) => ({
        onChangeField<Key extends keyof typeof self>(key: Key, value: (typeof self)[Key]) {
            self[key] = value
        },
    }))
