import { filter } from 'lodash'
import { isBefore } from 'date-fns'
import { types, getParentOfType } from 'mobx-state-tree'
import { IGoal$ } from '../types'
import { Goals$ } from './Goals.store'

export const Filter$ = types
    .model('Filter$', {
        goals_input_filter: '',
        goals_estimation_filter: types.snapshotProcessor(types.maybe(types.Date), {
            preProcessor: (sn: Date | undefined | string) => {
                if (!sn) {
                    return undefined
                }
                if (typeof sn === 'string') {
                    return new Date(sn)
                }
                return sn
            },
        }),
        global_filtered_title_value: '',
    })
    .views((self) => ({
        get activeGoals(): IGoal$[] {
            const { activeGoals } = getParentOfType(self, Goals$)

            return activeGoals
        },
        get activeFilteredGoals(): IGoal$[] {
            let allActive = filter(this.activeGoals, (goal) => goal.ritualGoalPower === 0)
            allActive = allActive.filter(
                (goal) =>
                    goal.title
                        .trim()
                        .toLocaleLowerCase()
                        .includes(self.goals_input_filter.trim().toLocaleLowerCase()) ||
                    goal.slogan
                        .trim()
                        .toLocaleLowerCase()
                        .includes(self.goals_input_filter.trim().toLocaleLowerCase()) ||
                    goal.description
                        .trim()
                        .toLocaleLowerCase()
                        .includes(self.goals_input_filter.trim().toLocaleLowerCase()),
            )

            self.goals_estimation_filter &&
                (allActive = filter(
                    allActive,
                    (goal) => !!goal.finished_at && isBefore(goal.finished_at, self.goals_estimation_filter!),
                ))

            return allActive
        },
    }))
    .actions((self) => ({
        onChangeField<Key extends keyof typeof self>(key: Key, value: typeof self[Key]) {
            self[key] = value
        },
    }))
