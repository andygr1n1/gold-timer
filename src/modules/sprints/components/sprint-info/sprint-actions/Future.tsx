import { ISprint$ } from '@/mst/types'
import { observer } from 'mobx-react-lite'
import { format } from 'date-fns'
import styles from './SprintActions.module.scss'

export const Future: React.FC<{ sprint: ISprint$ }> = observer(({ sprint }) => {
    const sprintDay = sprint.focusSprintDay
    if (!sprintDay || !sprintDay.date) return null

    const sprintDate = format(new Date(sprintDay.date), 'd MMMM')
    return (
        <div className={`${styles['button']} ${styles['buttonDisabled']}`}>
            <span className='mx-2 font-droid-bold text-rose-700'>Starts on</span> {sprintDate}
        </div>
    )
})
