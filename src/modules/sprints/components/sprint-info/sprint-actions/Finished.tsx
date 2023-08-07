import { ISprint$ } from '@/mst/types'
import { observer } from 'mobx-react-lite'
import { format } from 'date-fns'
import styles from './SprintActions.module.scss'

export const Finished: React.FC<{ sprint: ISprint$ }> = observer(({ sprint }) => {
    const sprintDay = sprint.focusSprintDay
    if (!sprintDay || !sprintDay.date) return null

    const sprintDate = format(new Date(sprintDay.date), 'd MMMM')

    return (
        <div className={`${styles['button']} ${styles['buttonDisabled']}`}>
            <span className='mx-2 font-droid-bold text-cyan-700'>Finished on</span> {sprintDate}
        </div>
    )
})
