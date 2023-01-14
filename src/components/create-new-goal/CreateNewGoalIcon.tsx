import { useGoalsStore } from '@/StoreProvider'
import { observer } from 'mobx-react-lite'
import { Icon } from '@iconify/react'

import styles from './CreateNewGoalIcon.module.scss'

export const CreateNewGoalIcon: React.FC = observer(() => {
    const { is_creator_mode, goCreateNewGoalMode } = useGoalsStore()
    return (
        <li
            className={`${styles['link']} ${is_creator_mode ? styles['link-active'] : styles['link-passive']}`}
            onClick={goCreateNewGoalMode}
        >
            <Icon icon='ic:round-dashboard-customize' width={25} height={25} />
            {/* <span>Creator</span> */}
        </li>
    )
})
