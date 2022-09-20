import { cast, getParent, getParentOfType, types } from 'mobx-state-tree'
import { Goal } from '../models/Goal.model'
import { IGoals$, IRoot$ } from '../types'
import { Goals$ } from './Goals.store'

export const Goal$ = types
    .compose(
        Goal,
        types.model({
            count_menu: false,
        }),
    )
    .named('Goal$')
    .views((self) => ({
        get isEditableGoal(): boolean {
            const { editable_goal } = getParent<IGoals$>(self, 2)
            return editable_goal?.id === self.id
        },
    }))
    .actions((self) => ({
        onChangeField<Key extends keyof typeof self>(key: Key, value: typeof self[Key]) {
            self[key] = value
        },
        setEditable(): void {
            const { toggleEditableGoal } = getParentOfType(self, Goals$)
            toggleEditableGoal(cast(self))
        },
    }))
