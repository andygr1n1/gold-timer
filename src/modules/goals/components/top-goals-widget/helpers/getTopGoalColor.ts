import { IGoal$ } from '@/modules/goals/mst/types'
import React from 'react'

export const getTopGoalColor = (goal: IGoal$): { containerClass: string; badgeStyle: React.CSSProperties } => {
    let containerClass = 'bg-teal-500 hover:bg-teal-400'
    let badgeStyle = {
        background: goal.daysEstimationCount >= 2 ? '#115e59' : 'transparent',
        color: 'white',
        borderColor: goal.daysEstimationCount >= 2 ? '#115e59' : 'transparent',
    }

    const isExpired = goal.isExpired
    const isRitual = goal.hasRitualPower

    if (isExpired) {
        containerClass = 'bg-rose-700 hover:bg-rose-600'
        badgeStyle = {
            background: 'transparent',
            color: 'white',
            borderColor: 'transparent',
        }
    } else if (isRitual) {
        containerClass = 'bg-indigo-700 hover:bg-indigo-600'
        badgeStyle = {
            background: goal.daysEstimationCount ? '#3730a3' : 'transparent',
            color: 'white',
            borderColor: goal.daysEstimationCount ? '#3730a3' : 'transparent',
        }
    }

    return { containerClass, badgeStyle }
}