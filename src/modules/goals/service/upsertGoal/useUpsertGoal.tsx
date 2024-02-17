import { useMutation } from '@tanstack/react-query'
import { IActiveGoalOptimized, IInsertNewGoal } from '../../interfaces/types'
import { getUserId } from '@/functions/universalCookie.helper'
import { convertStringToDate, setMidnightTime } from '@/functions/date.helpers'
import { setGoalDifficulty } from '@/functions/setGoalDifficulty'
import { mutation_upsertGoal } from './mutation_upsertGoal'
import { KEY_FetchGoalById, KEY_FetchGoalsByFilter, goalsQueryKeysValues } from '../keys'
import { proxyConvert } from '@/functions/proxyConvert'
import { replaceObjectValues } from '../../helpers/replaceObjectValues'
import { getSelectedGoalFromCache, pushGoalInCache } from '../../helpers/getSelectedGoalFromCache'

export const useUpsertGoal = () =>
    useMutation({
        mutationFn: ({ editGoal }: { editGoal: IActiveGoalOptimized }) => {
            const { title, slogan, description, finished_at, id } = editGoal
            const goalData: IInsertNewGoal = {
                id,
                owner_id: getUserId(),
                title,
                slogan,
                description,
                finished_at: setMidnightTime(convertStringToDate(finished_at)),
                status: editGoal.status || 'active',
                difficulty: setGoalDifficulty(convertStringToDate(editGoal.finished_at)),
                parent_goal_id: editGoal.parent_goal_id ?? null,
                is_favorite: !!editGoal.is_favorite,
            }
            const ritualData = editGoal.goal_ritual ? { ...editGoal.goal_ritual, goal_id: editGoal.id } : undefined
            return mutation_upsertGoal(goalData, ritualData)
        },
        onSuccess: (res) => {
            const resGoal = res?.[0]
            if (!resGoal) return

            goalsQueryKeysValues.forEach((filter) => {
                window.queryClient.setQueryData(
                    KEY_FetchGoalsByFilter(filter),
                    (oldData: IActiveGoalOptimized[] | { pages: { data: IActiveGoalOptimized[] }[] }) => {
                        const newData = oldData ? proxyConvert(oldData) : undefined
                        if (!newData) return

                        const selected = getSelectedGoalFromCache(newData, resGoal.id)
                        if (selected) {
                            replaceObjectValues(selected, resGoal)
                        } else {
                            // push only into active goals cache
                            ;(filter.toString().includes('all') || filter.toString().includes('active')) &&
                                pushGoalInCache(newData, resGoal)
                        }

                        return newData
                    },
                )
            })

            window.queryClient.setQueryData(KEY_FetchGoalById(resGoal.id), (oldData: IActiveGoalOptimized) => {
                const selected = oldData ? proxyConvert(oldData) : undefined
                replaceObjectValues(selected, resGoal)
                return selected
            })
        },
    })
