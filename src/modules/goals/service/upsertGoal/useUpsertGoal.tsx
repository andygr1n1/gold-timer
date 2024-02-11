import { useMutation } from '@tanstack/react-query'
import { IActiveGoalOptimized, IInsertNewGoal } from '../../interfaces/types'
import { getUserId } from '@/functions/universalCookie.helper'
import { convertStringToDate, setMidnightTime } from '@/functions/date.helpers'
import { setGoalDifficulty } from '@/functions/setGoalDifficulty'
import { mutation_upsertGoal } from './mutation_upsertGoal'
import { cloneDeep } from 'lodash-es'
import { KEY_FetchGoalById, KEY_FetchGoalsByFilter } from '../keys'

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
            window.queryClient.setQueryData(KEY_FetchGoalsByFilter('all', 8), (oldData: IActiveGoalOptimized[]) => {
                let proxyArray = new Proxy(cloneDeep(oldData), {})
                proxyArray = proxyArray.filter((goal) => goal.id !== resGoal.id)
                proxyArray.push(resGoal)
                return proxyArray
            })
            window.queryClient.setQueryData(KEY_FetchGoalById(resGoal.id), (oldData: IActiveGoalOptimized[]) => {
                if (!oldData) return oldData
                return cloneDeep({ ...oldData, ...resGoal })
            })
        },
    })
