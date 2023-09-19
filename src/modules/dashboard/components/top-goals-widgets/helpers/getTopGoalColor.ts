import { IGoal$ } from '@/mst/types'
import React from 'react'

export const getTopGoalColor = (goal: IGoal$): { containerClass: string; badgeStyle: React.CSSProperties } => {
    let containerClass = 'bg-teal-500 hover:bg-teal-400'
    let badgeStyle = {
        background: goal.daysEstimationCount ? 'var(--colors-teal-800)' : 'transparent',
        color: 'white',
        borderColor: goal.daysEstimationCount ? 'var(--colors-teal-800)' : 'transparent',
    }

    const isExpired = goal.isExpired
    const isRitual = goal.isRitualGoal

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
            background: goal.daysEstimationCount ? 'var(--colors-indigo-800)' : 'transparent',
            color: 'white',
            borderColor: goal.daysEstimationCount ? 'var(--colors-indigo-800)' : 'transparent',
        }
    }

    return { containerClass, badgeStyle }
}
