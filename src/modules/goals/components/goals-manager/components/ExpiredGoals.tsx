import { useRootStore } from '@/StoreProvider'
import { observer } from 'mobx-react-lite'
import { Goal } from './goal/Goal'
import clsx from 'clsx'
import styles from '../components/goal/Goal.module.scss'

export const ExpiredGoals: React.FC = observer(() => {
    const {
        goals$: { activeExpiredGoals },
    } = useRootStore()

    if (!activeExpiredGoals.length) return null

    return (
        <div className='flex w-full flex-col gap-5 md:flex-row md:flex-wrap'>
            {activeExpiredGoals.map((item) => (
                <Goal key={item.id} goal={item} />
            ))}
            <div className={clsx(styles['goal-container'], '!bg-transparent')} />
            <div className={clsx(styles['goal-container'], '!bg-transparent')} />
        </div>
    )
})
