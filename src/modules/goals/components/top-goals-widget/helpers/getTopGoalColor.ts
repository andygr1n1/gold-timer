import { IGoal$ } from '@/modules/goals/mst/types'
import clsx from 'clsx'
import React from 'react'

export const getTopGoalColor = (goal: IGoal$): { containerClass: string; badgeStyle: React.CSSProperties } => {
    let containerClass = 'bg-blue-700 hover:bg-blue-600'
    let badgeStyle = {
        background: goal.daysEstimationCount >= 2 ? '#1e3a8a' : 'transparent',
        color: 'white',
        borderColor: goal.daysEstimationCount >= 2 ? '#1e3a8a' : 'transparent',
        display: 'block',
    }

    const isExpired = goal.isExpired
    const isRitual = goal.isRitualGoal

    if (isExpired) {
        containerClass = 'bg-amber-600 hover:bg-amber-500'
        badgeStyle = {
            background: 'transparent',
            color: 'white',
            borderColor: 'transparent',
            display: 'block',
        }
    } else if (isRitual) {
        containerClass = clsx(
            'bg-emerald-700 hover:bg-emerald-600',
            goal.isFromFuture && 'opacity-50 hover:opacity-100',
        )
        badgeStyle = {
            background: goal.daysEstimationCount >= 2 ? '#064e3b' : 'transparent',
            color: 'white',
            borderColor: goal.daysEstimationCount >= 2 ? '#064e3b' : 'transparent',
            display: goal.isFromFuture ? 'none' : 'block',
        }
    }

    return { containerClass, badgeStyle }
}
