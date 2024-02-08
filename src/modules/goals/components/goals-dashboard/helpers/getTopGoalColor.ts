import { IActiveGoalOptimized } from '@/modules/goals/interfaces/types'
import clsx from 'clsx'

export const getTopGoalColor = (goal: IActiveGoalOptimized): { containerClass: string } => {
    let containerClass = 'bg-blue-700 hover:bg-blue-600'

    const isExpired = goal.isExpired
    const isRitual = goal.isRitual
    const isFavorite = goal.is_favorite

    if (isFavorite) {
        containerClass = clsx(
            'bg-gradient-to-r from-blue-500 via-purple-500 to-rose-500 shadow-[0_2px_50px_rgba(8,_112,_184,_0.7)]',
        )
    } else if (isExpired) {
        containerClass = 'bg-amber-600 hover:bg-amber-500'
    } else if (isRitual) {
        containerClass = clsx('bg-emerald-700 hover:bg-emerald-600')
    }

    return { containerClass }
}
