import { types } from 'mobx-state-tree'
import { Goal$ } from './Goal.store'

export const GoalNew$ = types
    .compose(
        Goal$,
        types.model({
            edit_mode: false,
            view_mode: false,
            create_ritual_mode: false,
            create_child_mode: false,
            redirect_mode: types.maybe(
                types.union(
                    types.literal('view_mode'),
                    types.literal('edit_mode'),
                    types.literal('create_ritual_mode'),
                ),
            ),

            // img_src: '',
            // img_cropped_src: '',
            // loading: false,
            // new_sprint_goal: '',
        }),
    )
    .named('GoalNew$')
    .views((self) => ({
        get goalDataValidator(): boolean {
            return !!self.title.length && !!self.finished_at
        },
        // get createMode(): boolean {
        //     return !self.edit_mode && !self?.view_mode
        // },
    }))
    .actions((self) => ({
        onChangeField<Key extends keyof typeof self>(key: Key, value: (typeof self)[Key]) {
            self[key] = value
        },
    }))
