import { WidgetInfoIcon } from '@/components/icons/WidgetInfoIcon'
import { useGoalsStore } from '@/StoreProvider'
import { truncate } from 'lodash'
import { observer } from 'mobx-react-lite'
import { toggleModalState, TopActiveGoalsModal } from './top-active-goals-modal/TopActiveGoalsModal'

import styles from '../TopGoalsWidget.module.scss'

export const TopActiveGoalsWidget: React.FC = observer(() => {
    const {
        onChangeField,
        topActiveGoals: { topFour },
    } = useGoalsStore()

    return (
        <div className={styles['wrapper']}>
            <WidgetInfoIcon
                onClick={toggleModalState}
                icon='ic:baseline-rocket-launch'
                iconColor='text-white'
                bgColor='bg-teal-500 hover:bg-teal-400 cursor-pointer'
            />
            <div className={styles['goals-container']}>
                {topFour.length ? (
                    <>
                        {topFour.map((goal) => (
                            <div
                                key={goal.id}
                                className={`${styles['goal']} bg-teal-500 hover:bg-teal-400`}
                                onClick={() => {
                                    onChangeField('active_collapse_key', goal.id)
                                    toggleModalState()
                                }}
                            >
                                {truncate(goal.title, { length: 35 })}
                            </div>
                        ))}
                    </>
                ) : (
                    <div className='absolute-center flex w-full items-center justify-center self-center font-neon text-gray-500'>
                        🍀 take it easy today 🍀
                    </div>
                )}
            </div>
            <TopActiveGoalsModal />
        </div>
    )
})
