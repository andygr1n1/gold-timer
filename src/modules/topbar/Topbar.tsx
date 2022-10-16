import { useGoalsStore, useUserStore } from '@/StoreProvider'
import { observer } from 'mobx-react-lite'
import styles from './Topbar.module.scss'

export const Topbar: React.FC = observer(() => {
    const { completedGoalsCount } = useGoalsStore()
    const { coins } = useUserStore()

    return (
        <div className={styles['topbar']}>
            <div className={styles['topbar-brand']}>Gold Timer</div>
            <div className='flex items-center justify-center gap-10'>
                <div className='cursor-default' title='completed goals'>
                    <span className='text-2xl'>🏁</span>
                    <span className='px-3 font-mono text-xl font-bold text-yellow-300'>{completedGoalsCount}</span>
                </div>
                <div className='cursor-default'>
                    <span className='text-2xl'>🌟</span>
                    <span className='px-3 font-mono text-xl font-bold text-yellow-300'>{coins}</span>
                </div>
            </div>
        </div>
    )
})
