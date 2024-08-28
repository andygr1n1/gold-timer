import { type IGoalSchema } from '@/modules/goals/shared-service/types'
import clsx from 'clsx'
import { calculateIsExpired, calculateIsRitual } from './optimizeActiveGoalsData'
import { isCompletedGoalStatus } from './goalsGuards'

export const getTopGoalColor = (goal: IGoalSchema): { containerClass: string } => {
    let containerClass = 'bg-blue-700 hover:bg-blue-600'
    const isRitual = calculateIsRitual(goal)
    const isExpired = calculateIsExpired(goal)
    const isFavorite = goal.is_favorite
    const _isCompleted = isCompletedGoalStatus(goal.status)
    const isDeleted = !!goal.deleted_at

    if (isFavorite) {
        containerClass = clsx(
            'bg-gradient-to-r from-blue-600 via-blue-500 to-rose-500 shadow-[0_2px_50px_rgba(8,_112,_184,_0.7)]',
        )
    } else if (_isCompleted) {
        containerClass = clsx('bg-violet-700 hover:bg-violet-600')
    } else if (isExpired) {
        containerClass = 'bg-amber-600 hover:bg-amber-500'
    } else if (isRitual) {
        containerClass = clsx('bg-emerald-700 hover:bg-emerald-600')
    }

    if (isFavorite && isRitual) {
        containerClass = clsx(
            'bg-gradient-to-r from-emerald-600 via-emerald-500 to-rose-500 shadow-[0_2px_50px_rgba(8,_212,_184,_0.7)]',
        )
    }

    if (isFavorite && isExpired) {
        containerClass = clsx(
            'bg-gradient-to-r from-amber-600 via-amber-500 to-rose-500 shadow-[0_2px_25px_rgba(255,_193,_71,_0.7)]',
        )
    }

    if (isFavorite && _isCompleted) {
        containerClass = clsx(
            'bg-gradient-to-r from-violet-700 via-violet-600 to-rose-500 shadow-[0_2px_25px_rgba(238,_130,_238,_0.7)]',
        )
    }

    if (isDeleted) {
        containerClass = clsx('bg-slate-700 hover:bg-slate-600')
    }

    if (isFavorite && isDeleted) {
        containerClass = clsx(
            'bg-gradient-to-r from-slate-700 via-slate-600 to-rose-500 shadow-[0_2px_25px_rgba(112,_128,_211,_0.7)]',
        )
    }

    return { containerClass }
}
