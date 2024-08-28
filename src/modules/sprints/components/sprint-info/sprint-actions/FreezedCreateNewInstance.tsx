import { Button } from 'antd'
import { observer } from 'mobx-react-lite'
import { useSprintsStore } from '../../../../app/mst/StoreProvider'
import styles from './SprintActions.module.scss'
import { type ISprint$ } from '@/modules/sprints/mst/types'

export const FreezedCreateNewInstance: React.FC<{ sprint: ISprint$ }> = observer(({ sprint }) => {
    const { restartSelectedSprint: createNewSprintInstance } = useSprintsStore()
    const createNewInstance = () => {
        createNewSprintInstance(sprint)
    }

    return (
        <Button className={styles['button']} onClick={() => createNewInstance()} type='primary'>
            Restart
        </Button>
    )
})
