import { useRootStore } from '@/StoreProvider'
import { IGoal$ } from '@/modules/goals/mst/types'
import { motion, MotionConfig } from 'framer-motion'
import { ReactNode } from 'react'
import styles from '../Goal.module.scss'
import clsx from 'clsx'

export const GoalWrapper: React.FC<{ children: ReactNode; goal: IGoal$ }> = ({ children, goal }) => {
    const { hasRitualPower: isRitualGoal, isExpired, isCompleted } = goal
    const {
        goals$: { openViewMode },
    } = useRootStore()

    let styleByGoalType = 'border-l-green-400 bg-white'

    if (isRitualGoal) styleByGoalType = 'border-l-indigo-400 bg-indigo-300 '

    if (isExpired) styleByGoalType = 'border-l-amber-600 bg-amber-600/20'

    if (isCompleted) styleByGoalType = 'border-l-orange-600 bg-orange-300/20'

    return (
        <MotionConfig transition={{ duration: 0.3 }}>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.9 }}
                className={clsx(
                    styles['goal-container'],
                    `border-l-solid relative flex cursor-pointer
                            flex-col gap-5 rounded-md border-l-[20px] p-5 duration-300 hover:!opacity-100
                            ${styleByGoalType}
                            `,
                )}
                onClick={() => openViewMode(goal.id)}
            >
                {/* goal container */}
                {children}
            </motion.div>
        </MotionConfig>
    )
}
