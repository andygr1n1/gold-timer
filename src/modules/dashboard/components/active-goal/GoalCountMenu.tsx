import { IGoal$ } from '@/mst/types'
import { motion } from 'framer-motion'
import { observer } from 'mobx-react-lite'
import React, { useState } from 'react'
import { RingLoader } from 'react-spinners'

export const GoalCountMenu: React.FC<{ goal: IGoal$ }> = observer(({ goal }) => {
    const { remainingTimeDaysCount, goGoalViewMode } = goal
    const [loading, setLoading] = useState(false)

    const onClick = () => goGoalViewMode()

    return (
        <div
            className='group
            group relative flex h-20 w-20 cursor-pointer items-center justify-center rounded-full
            border-solid border-white bg-spaceblue text-xl font-bold text-white'
            onMouseEnter={() => setLoading(true)}
            onMouseLeave={() => setLoading(false)}
        >
            {!loading && (
                <motion.span
                    initial={{ opacity: 0, translateX: -5, translateY: -5 }}
                    animate={{ opacity: 1, translateX: 0, translateY: 0, transition: { duration: 0.4 } }}
                    exit={{ opacity: 0, transition: { duration: 0.4 } }}
                >
                    {remainingTimeDaysCount}
                </motion.span>
            )}

            {loading && (
                <motion.div
                    initial={{ opacity: 0, translateX: -5, translateY: -5 }}
                    animate={{ opacity: 1, translateX: 0, translateY: 0, transition: { duration: 0.4 } }}
                    exit={{ opacity: 0, transition: { duration: 0.4 } }}
                    onClick={onClick}
                >
                    <RingLoader color='#fef08a' loading={loading} />
                </motion.div>
            )}
        </div>
    )
})
