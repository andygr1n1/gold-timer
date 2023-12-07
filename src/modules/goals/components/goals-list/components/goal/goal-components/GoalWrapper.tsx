import { useRootStore } from '@/StoreProvider'
import { IGoal$ } from '@/modules/goals/mst/types'
import { motion, MotionConfig } from 'framer-motion'
import { ReactNode } from 'react'
import styles from '../Goal.module.scss'
import clsx from 'clsx'
import { observer } from 'mobx-react-lite'

export const GoalWrapper: React.FC<{ children: ReactNode; goal: IGoal$ }> = observer(({ children, goal }) => {
    const { isRitualGoal: isRitualGoal, isExpired, isCompleted } = goal
    const {
        goals$: { openViewMode },
    } = useRootStore()

    let styleByGoalType = 'border-l-blue-700 bg-white'

    if (isRitualGoal) styleByGoalType = 'border-l-emerald-700'

    if (isExpired) styleByGoalType = 'border-l-amber-600'

    if (isCompleted) styleByGoalType = 'border-l-gray-600 '

    return (
        <MotionConfig transition={{ duration: 0.3 }}>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.9 }}
                className={clsx(
                    styles['goal-container'],
                    `relative flex cursor-pointer flex-col gap-5 rounded-md duration-300 hover:!opacity-100
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
})
