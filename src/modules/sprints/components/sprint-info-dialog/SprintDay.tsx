import { ISprintDay } from '@/mst/types'
import { format, set } from 'date-fns'
import { observer } from 'mobx-react-lite'
import { clsx } from 'clsx'

export const SprintDay: React.FC<{ sprintDay: ISprintDay }> = observer(({ sprintDay }) => {
    if (!sprintDay.date) return null

    const today = format(new Date(Date.now()), 'dd/MM')

    const sprintDate = format(new Date(sprintDay.date), 'dd/MM')

    const status = sprintDay.status

    let relatedClass = ''

    const todayTime = new Date(Date.now()).getTime()
    const sprintDayTime = set(new Date(sprintDay.date), { hours: 0, minutes: 0, seconds: 0 }).getTime()

    if (todayTime >= sprintDayTime) {
        relatedClass = status
            ? 'bg-cyan-500/70 text-cyan-900 border-transparent cursor-default'
            : 'bg-gray-500 text-gray-800 cursor-default'
    }
    //
    if (today === sprintDate && !status) relatedClass = 'border-cyan-500 cursor-pointer text-cText'

    if (todayTime < sprintDayTime) {
        relatedClass = 'border-gray-400 text-gray-400'
    }
    // set(startDate, { hours: 0, minutes: 0, seconds: 0 }
    const disabled = today !== sprintDate
    return (
        sprintDay.date && (
            <button
                disabled={disabled}
                className={clsx([
                    `flex h-16 select-none items-center justify-center rounded-md border-solid p-5 text-xl`,
                    relatedClass,
                ])}
                onClick={(e) => e.detail === 2 && sprintDay.changeStatus()}
            >
                {sprintDate}
            </button>
        )
    )
})
