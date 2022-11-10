import { RdButton } from '@/components/antrd-button/RdButton'
import { IGoal$ } from '@/mst/types'
import { format } from 'date-fns'
import { motion, MotionConfig } from 'framer-motion'
import { observer } from 'mobx-react-lite'
import { useState } from 'react'
import { CompleteMode } from '../modes/CompleteMode'
import { FailMode } from '../modes/FailMode'

export const ExpiredGoal: React.FC<{ goal: IGoal$ }> = observer(({ goal }) => {
    const {
        created_at,
        createdDaysAgo,
        title,
        slogan,
        description,
        goActivateFreezedGoal,
        remainingTimeString,
        remainingTimeDaysCount,
    } = goal

    const [failMode, setFailMode] = useState(false)
    const [completeMode, setCompleteMode] = useState(false)

    return (
        <MotionConfig transition={{ duration: 0.3 }}>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className={`border-l-solid relative flex min-w-[300px] flex-col gap-5 
                            rounded-md border-l-[4px] bg-red-50 bg-gray-100 p-5 shadow-xl ${
                                completeMode ? 'border-l-green-400' : 'border-l-red-400'
                            }`}
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
                    <div className='flex items-center gap-2 py-4 font-bold  text-red-700'>
                        <span className='capitalize'>{remainingTimeString}</span>
                        <span className='text-xl font-bold'>{Math.abs(remainingTimeDaysCount)}</span>
                        <span>days ago</span>
                    </div>

                    <h3 className='my-2 bg-red-500 p-1 font-bold text-gray-800'>{title}</h3>
                    <div>{slogan}</div>
                    <div>{description}</div>
                </div>
                <div className='flex flex-auto justify-between gap-3'>
                    <RdButton className='greenbutton' type='primary' onClick={() => setCompleteMode(true)}>
                        Complete
                    </RdButton>
                    <RdButton disabled={true} onClick={goActivateFreezedGoal}>
                        Ritualize
                    </RdButton>
                    <RdButton disabled={true} onClick={goActivateFreezedGoal}>
                        New Round
                    </RdButton>
                    <RdButton className='redbutton' type='ghost' onClick={() => setFailMode(true)}>
                        Fail
                    </RdButton>
                </div>
                {<FailMode goal={goal} opened={failMode} onClose={() => setFailMode(false)} />}
                {<CompleteMode goal={goal} opened={completeMode} onClose={() => setCompleteMode(false)} />}
            </motion.div>
        </MotionConfig>
    )
})
