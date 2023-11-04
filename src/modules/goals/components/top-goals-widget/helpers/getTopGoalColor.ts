import { IGoal$ } from '@/modules/goals/mst/types'
import React from 'react'

export const getTopGoalColor = (goal: IGoal$): { containerClass: string; badgeStyle: React.CSSProperties } => {
    let containerClass = 'bg-blue-700 hover:bg-blue-600'
    let badgeStyle = {
        background: goal.daysEstimationCount >= 2 ? '#1e3a8a' : 'transparent',
        color: 'white',
        borderColor: goal.daysEstimationCount >= 2 ? '#1e3a8a' : 'transparent',
    }

    const isExpired = goal.isExpired
    const isRitual = goal.hasRitualPower

    if (isExpired) {
        containerClass = 'bg-amber-600 hover:bg-amber-500'
        badgeStyle = {
            background: 'transparent',
            color: 'white',
            borderColor: 'transparent',
        }
    } else if (isRitual) {
        containerClass = 'bg-emerald-700 hover:bg-emerald-600'
        badgeStyle = {
            background: goal.daysEstimationCount ? '#064e3b' : 'transparent',
            color: 'white',
            borderColor: goal.daysEstimationCount ? '#064e3b' : 'transparent',
        }
    }

    return { containerClass, badgeStyle }
}
