import { IGoal$ } from '@/mst/types'
import { motion, MotionConfig } from 'framer-motion'
import { ReactNode } from 'react'

export const GoalWrapper: React.FC<{ children: ReactNode; goal: IGoal$ }> = ({ children, goal }) => {
    const { isRitualGoal, isExpired, isFrozen, isCompleted } = goal

    let styleByGoalType = 'border-l-green-400 bg-white'

    if (isRitualGoal) styleByGoalType = 'border-l-indigo-400 bg-indigo-300 '

    if (isExpired) styleByGoalType = 'border-l-red-400 bg-red-300 '

    if (isFrozen) styleByGoalType = 'border-l-blue-400 bg-blue-300 '

    if (isCompleted) styleByGoalType = 'border-l-amber-400 bg-amber-300'

    return (
        <MotionConfig transition={{ duration: 0.3 }}>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className={`border-l-solid relative flex min-w-[150px] flex-col gap-5 
                            rounded-md border-l-[4px]  pb-4 shadow-xl
                            ${styleByGoalType}
                            `}
            >
                {/* goal container */}
                <div className='flex'>{children}</div>
            </motion.div>
        </MotionConfig>
    )
}
