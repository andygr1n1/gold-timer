import { useGoalsStore } from '@/StoreProvider'
import { observer } from 'mobx-react-lite'
import styles from '../Sidebar.module.scss'

export const SidebarCreator: React.FC = observer(() => {
    const { is_creator_mode, goCreateNewGoalMode: createNewGoalMode } = useGoalsStore()
    return (
        <li
            className={`${styles['link']} ${is_creator_mode ? styles['link-active'] : styles['link-passive']}`}
            onClick={createNewGoalMode}
        >
            <span className='material-icons-round '>lightbulb</span>
            <span>Creator</span>
        </li>
    )
})
