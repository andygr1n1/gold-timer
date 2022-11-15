import { RdButton } from '@/components/antrd-button/RdButton'
import { IGoal$ } from '@/mst/types'
import { Icon } from '@iconify/react'
import { motion, AnimatePresence } from 'framer-motion'
import { observer } from 'mobx-react-lite'

export const CompleteMode: React.FC<{ goal: IGoal$; opened: boolean; onClose: () => void }> = observer(
    ({ goal, opened, onClose }) => {
        const { completeGoal, completeGoalAndCreateNewChild, goGoalRitualizedMode } = goal

        return (
            <AnimatePresence>
                {opened && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: '100%' }}
                        exit={{ opacity: 0 }}
                        className='
                                    absolute top-0 left-0 flex h-full w-full items-center justify-center gap-3 rounded-md
                                    border-2 bg-green-50

                '
                    >
                        <RdButton className='graybutton flex items-center gap-3' onClick={onClose}>
                            <Icon icon='akar-icons:arrow-back-thick-fill' />
                            <span>Back</span>
                        </RdButton>
                        <div className='flex w-[205px] flex-wrap gap-3'>
                            <RdButton
                                animation={'true'}
                                className='greenbutton h-20 w-24 hover:font-bold'
                                type='primary'
                                onClick={completeGoal}
                            >
                                Complete
                            </RdButton>
                            <RdButton
                                animation={'true'}
                                className='goldbutton flex h-20 w-24 flex-col items-center justify-center hover:font-bold'
                                type='primary'
                                onClick={completeGoalAndCreateNewChild}
                            >
                                <div>New child</div>
                                <div>goal</div>
                            </RdButton>
                            <RdButton
                                animation={'true'}
                                className='indigobutton  w-24 hover:font-bold'
                                type='primary'
                                onClick={goGoalRitualizedMode}
                            >
                                Ritualize
                            </RdButton>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        )
    },
)
