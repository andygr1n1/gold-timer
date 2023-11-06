import { useRootStore } from '@/StoreProvider'
import { observer } from 'mobx-react-lite'
import { Goal } from './goal/Goal'
import styles from '../components/goal/Goal.module.scss'
import clsx from 'clsx'

export const ActiveGoals: React.FC = observer(() => {
    const {
        goals$: { activeGoals },
    } = useRootStore()

    return (
        <div className='flex w-full flex-col gap-5 md:flex-row md:flex-wrap'>
            {activeGoals.map((item) => (
                <Goal key={item.id} goal={item} />
            ))}
            <div className={clsx(styles['goal-container'], '!bg-transparent')} />
            <div className={clsx(styles['goal-container'], '!bg-transparent')} />
        </div>
    )
})
