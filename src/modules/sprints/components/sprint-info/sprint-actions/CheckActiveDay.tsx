import { Button } from 'antd'
import { observer } from 'mobx-react-lite'
import { Checkbox } from 'antd'
import styles from './SprintActions.module.scss'
import { ISprint$ } from '@/modules/sprints/mst/types'

export const CheckActiveDay: React.FC<{ sprint: ISprint$ }> = observer(({ sprint }) => {
    const sprintDay = sprint.focusSprintDay
    if (!sprintDay) return null

    const { changeStatus, status, onChangeField } = sprintDay

    return (
        <Button className={styles['button']} onClick={() => changeStatus()} type={status ? 'text' : 'primary'}>
            <Checkbox checked={status || false} onChange={(e) => onChangeField('status', e.target.checked)} />
        </Button>
    )
})
