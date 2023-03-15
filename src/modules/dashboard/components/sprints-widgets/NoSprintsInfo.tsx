import { useGoalsStore } from '@/StoreProvider'
import { observer } from 'mobx-react-lite'
import styles from './TopGoalsWidgets.module.scss'

export const NoSprintsInfo: React.FC = observer(() => {
    const { noActiveSprints } = useGoalsStore()

    return noActiveSprints ? (
        <div className={styles['wrapper']}>
            <div className='flex h-full w-full items-center justify-center text-navlink-active text-gray-500 '>
                no sprints, feel free
            </div>
        </div>
    ) : null
})
