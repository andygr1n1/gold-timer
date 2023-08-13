import { ISprint$ } from '@/mst/types'
import { Button } from 'antd'
import { observer } from 'mobx-react-lite'
import { useSprintsStore } from '../../../../../StoreProvider'
import styles from './SprintActions.module.scss'

export const FreezedCreateNewInstance: React.FC<{ sprint: ISprint$ }> = observer(({ sprint }) => {
    const { restartSelectedSprint: createNewSprintInstance } = useSprintsStore()
    const createNewInstance = () => {
        createNewSprintInstance(sprint)
    }

    return (
        <Button className={styles['button']} onClick={() => createNewInstance()} type='primary'>
            Restarrt
        </Button>
    )
})
