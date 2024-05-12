import { useMutation } from '@tanstack/react-query'
import { IGoal, IInsertNewGoal } from '../types'
import { getUserId } from '@/functions/getUserData'
import { convertStringDate, prepareFinishedAtForInsert } from '@/functions/date.helpers'
import { setGoalDifficulty } from '@/functions/setGoalDifficulty'
import { mutation_upsertGoal } from './mutation_upsertGoal'
import { KEY_FetchGoalById, KEY_FetchGoalsByFilter, goalsQueryKeys, goalsQueryKeysValues } from '../keys'
import { proxyConvert } from '@/functions/proxyConvert'
import { replaceObjectValues } from '../../../../functions/replaceObjectValues'
import { getSelectedGoalFromCache, pushGoalInCache } from '../../helpers/goalsCache'
import { isDashboard, isGoalFilterActive } from '@/helpers/guards'
import { KEY_FetchArtifactsCount } from '@/modules/dashboard/components/artifacts-counter/service/keys'
import { KEY_FetchTopRitualGoals } from '../../components/goals-dashboard/top-ritual-goals-widget/service/keys'

export const useUpsertGoal = () =>
    useMutation({
        mutationFn: ({ editGoal }: { editGoal: IGoal }) => {
            const { title, slogan, description, finished_at, id } = editGoal
            const goalData: IInsertNewGoal = {
                id,
                owner_id: getUserId(),
                title,
                slogan,
                description,
                finished_at: prepareFinishedAtForInsert(finished_at),
                status: editGoal.status || 'active',
                difficulty: setGoalDifficulty(convertStringDate(editGoal.finished_at)),
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
                    (oldData: IGoal[] | { pages: { data: IGoal[] }[] }) => {
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
        },
        onSettled: (data) => {
            if (!data?.[0]) return
            window.queryClient.setQueryData(KEY_FetchGoalById(data[0].id), (oldData: IGoal) => {
                const selected = oldData ? proxyConvert(oldData) : undefined
                replaceObjectValues(selected, data[0])
                return selected
            })
            window.queryClient.invalidateQueries({ queryKey: KEY_FetchGoalById(data[0].id) })
            isDashboard() && window.queryClient.invalidateQueries({ queryKey: goalsQueryKeys.DASHBOARD })
            isDashboard() && window.queryClient.invalidateQueries({ queryKey: KEY_FetchArtifactsCount() })
            isDashboard() && window.queryClient.invalidateQueries({ queryKey: KEY_FetchTopRitualGoals() })

            /* To remove ritual goal, when it is ritualized in active goals mode */
            isGoalFilterActive() &&
                window.queryClient.setQueryData(
                    KEY_FetchGoalsByFilter(['KEY_FetchGoalsByFilter', 'active']),
                    (oldData: IGoal[]) => {
                        return data[0].goal_ritual ? oldData.filter((g) => g.id === data[0].id) : oldData
                    },
                )
        },
    })
