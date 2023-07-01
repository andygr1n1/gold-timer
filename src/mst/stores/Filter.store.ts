import { filter } from 'lodash-es'
import { isBefore } from 'date-fns'
import { types, getParentOfType } from 'mobx-state-tree'
import { IGoal$ } from '../types'
import { Goals$ } from './Goals.store'
import { ACTIVE_GOAL_TYPE_ENUM } from '@/helpers/enums'

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

        goals_collapse_type: types.optional(
            types.enumeration(Object.values(ACTIVE_GOAL_TYPE_ENUM)),
            ACTIVE_GOAL_TYPE_ENUM.ACTIVE,
        ),
    })
    .views((self) => ({
        get goalsByCollapseType(): IGoal$[] {
            const { activeGoalsWithoutRitualPower, ritualGoals, activeExpiredGoals, favoriteGoals } = getParentOfType(
                self,
                Goals$,
            )

            switch (self.goals_collapse_type) {
                case ACTIVE_GOAL_TYPE_ENUM.ACTIVE:
                    return activeGoalsWithoutRitualPower
                case ACTIVE_GOAL_TYPE_ENUM.RITUALIZED:
                    return ritualGoals
                case ACTIVE_GOAL_TYPE_ENUM.EXPIRED:
                    return activeExpiredGoals
                case ACTIVE_GOAL_TYPE_ENUM.FAVORITE:
                    return favoriteGoals
                default:
                    return activeGoalsWithoutRitualPower
            }
        },
        get filteredGoals(): IGoal$[] {
            let filtered = this.goalsByCollapseType

            filtered = filtered.filter(
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
                (filtered = filter(
                    filtered,
                    (goal) => !!goal.finished_at && isBefore(goal.finished_at, self.goals_estimation_filter!),
                ))

            return filtered
        },
        get goalsCollapseData(): { title: string; data: IGoal$[]; isFavorite: boolean } {
            let title = 'Active Goals'
            switch (self.goals_collapse_type) {
                case ACTIVE_GOAL_TYPE_ENUM.RITUALIZED:
                    title = 'Ritual Goals'
                    break
                case ACTIVE_GOAL_TYPE_ENUM.EXPIRED:
                    title = 'Expired Goals'
                    break
                case ACTIVE_GOAL_TYPE_ENUM.FAVORITE:
                    title = 'Favorite Goals'
                    break
                default:
                    title = 'Active Goals'
                    break
            }

            const isFavorite = self.goals_collapse_type === ACTIVE_GOAL_TYPE_ENUM.FAVORITE
            return { title, data: this.filteredGoals, isFavorite }
        },
    }))
    .actions((self) => ({
        onChangeField<Key extends keyof typeof self>(key: Key, value: typeof self[Key]) {
            self[key] = value
        },
    }))
