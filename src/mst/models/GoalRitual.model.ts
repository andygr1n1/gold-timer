import { RITUAL_TYPE_ENUM } from '@/helpers/enums'
import { types } from 'mobx-state-tree'

export const GoalRitual = types
    .model('GoalRitual', {
        ritual_id: '',
        goal_id: '',
        ritual_type: types.optional(
            types.enumeration(Object.values(RITUAL_TYPE_ENUM)),
            RITUAL_TYPE_ENUM.INTERVAL_IN_DAYS,
        ),
        ritual_power: 0,
        ritual_interval: 7,
    })
    .actions((self) => ({
        onChangeField<Key extends keyof typeof self>(key: Key, value: typeof self[Key]) {
            self[key] = value
        },
    }))
