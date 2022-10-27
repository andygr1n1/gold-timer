import { useGoalsStore } from '@/StoreProvider'
import { observer } from 'mobx-react-lite'
import { Icon } from '@iconify/react'

import styles from './SidebarLink.module.scss'

export const SidebarLinkCreator: React.FC = observer(() => {
    const { is_creator_mode, goCreateNewGoalMode: createNewGoalMode } = useGoalsStore()
    return (
        <li
            className={`${styles['link']} ${is_creator_mode ? styles['link-active'] : styles['link-passive']}`}
            onClick={createNewGoalMode}
        >
            <Icon icon='ic:round-dashboard-customize' className='text-2xl' />
            <span>Creator</span>
        </li>
    )
})
