import { observer } from 'mobx-react-lite'
import { IGoal$ } from '../../../mst/types'
import { motion } from 'framer-motion'
import { setGoalColor } from '@/helpers/set_goal_color'
import { GoalBoxEditable } from './GoalBoxEditable'
import { GoalBox } from './GoalBox'

export const Goal: React.FC<{ goal: IGoal$ }> = observer(({ goal }) => {
    const { isFrozen, isEditableGoal } = goal

    return (
        <motion.div
            initial={{ opacity: 0, translateX: -5, translateY: -5 }}
            animate={{ opacity: 1, translateX: 0, translateY: 0, transition: { duration: 0.4 } }}
            exit={{ opacity: 0, transition: { duration: 0.4 } }}
            className='flex w-full basis-80'
        >
            <div
                className={`${setGoalColor(goal.difficulty, isFrozen)}
                group flex min-h-[250px]
                w-full cursor-default flex-col  items-center
                rounded-lg shadow-md`}
            >
                <div
                    className='
                    flex w-full items-center justify-between rounded-tl-lg rounded-tr-lg bg-skyblue
                    py-2 px-2 text-sm font-bold text-white'
                >
                    <span>{goal.slogan}</span>
                    <span className='material-icons-round cursor-pointer !text-sm opacity-0 transition-all group-hover:opacity-100'>
                        settings
                    </span>
                </div>
                {isEditableGoal ? <GoalBoxEditable /> : <GoalBox goal={goal} />}
            </div>
        </motion.div>
    )
})
