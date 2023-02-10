import { useGoalsStore } from '@/StoreProvider'
import { observer } from 'mobx-react-lite'
import styles from './TopGoalsWidget.module.scss'
export const NoGoalsInfo: React.FC = observer(() => {
    const { noGoalsForToday } = useGoalsStore()

    return noGoalsForToday ? (
        <div className={styles['wrapper']}>
            <div className='flex  h-[290px] w-[633px] items-center justify-center text-navlink-active '>
                no goals today
            </div>
        </div>
    ) : null
})
