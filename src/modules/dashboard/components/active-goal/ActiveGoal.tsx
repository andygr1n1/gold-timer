import { RdButton } from '@/components/antrd-button/RdButton'
import { IGoal$ } from '@/mst/types'
import { format } from 'date-fns'
import { motion, MotionConfig } from 'framer-motion'
import { observer } from 'mobx-react-lite'
import { useState } from 'react'
import { CompleteMode } from '../modes/CompleteMode'

export const ActiveGoal: React.FC<{ goal: IGoal$ }> = observer(({ goal }) => {
    const {
        created_at,
        createdDaysAgo,
        title,
        slogan,
        description,
        goGoalViewMode,
        remainingTimeString,
        remainingTimeDaysCount,
        isRitualGoal,
    } = goal

    const [completeMode, setCompleteMode] = useState(false)

    return (
        <MotionConfig transition={{ duration: 0.3 }}>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className={`border-l-solid relative relative flex min-w-[350px] flex-col gap-5 
                            rounded-md border-l-[4px] border-l-green-400 bg-white p-5 shadow-xl
                            ${isRitualGoal ? 'border-l-indigo-400 bg-indigo-200' : 'border-l-green-400'}
                            `}
            >
                <div className='flex h-full flex-col'>
                    <div>
                        {created_at && (
                            <div className='flex items-center gap-4 font-mono text-xs text-slate-500'>
                                <span>created </span>
                                <span>{format(created_at, 'MM.dd.yyyy')}</span>
                                <span>{format(created_at, 'HH:mm')}</span>
                            </div>
                        )}
                        {
                            <div className='flex h-5 items-center gap-4 font-monoIitalic text-xs text-slate-500'>
                                {!!createdDaysAgo && `${createdDaysAgo} days ago`}
                            </div>
                        }
                    </div>
                    <div className='flex items-center gap-2 py-4  '>
                        <span className='capitalize text-slate-500'>deadline in</span>
                        <span className='text-xl font-bold capitalize  text-green-600'>{remainingTimeString}</span>
                    </div>

                    <h3 className='my-4 bg-green-500 p-1 text-center font-bold text-gray-800'>{title}</h3>
                    <div className='text-center text-base font-bold'>{slogan}</div>

                    <div className='my-4 max-w-[400px] truncate text-center'>{description}</div>
                </div>
                <div className='flex flex-auto justify-between gap-3'>
                    <RdButton className='greenbutton' type='primary' onClick={() => setCompleteMode(true)}>
                        Complete
                    </RdButton>

                    <RdButton className='greenbutton' type='ghost' onClick={() => goGoalViewMode()}>
                        Details
                    </RdButton>
                </div>
                {<CompleteMode goal={goal} opened={completeMode} onClose={() => setCompleteMode(false)} />}
                <BadgeTotalDays remainingTimeDaysCount={remainingTimeDaysCount} />
            </motion.div>
        </MotionConfig>
    )
})

export const BadgeTotalDays: React.FC<{ remainingTimeDaysCount: number }> = ({ remainingTimeDaysCount }) => {
    return (
        <div
            className='
                        absolute top-[-18px] right-[-18px] flex min-h-[40px] min-w-[40px]
                        items-center justify-center rounded-full border-2 border-solid border-green-500 bg-green-50 p-1 text-base font-bold'
        >
            <span className='text-xl font-bold'>{Math.abs(remainingTimeDaysCount)}</span>
        </div>
    )
}
