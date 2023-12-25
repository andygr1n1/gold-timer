import { IGoal$ } from '@/modules/goals/mst/types'
import { format } from 'date-fns'
import { uniq } from 'lodash-es'
import { useState } from 'react'

export const useFilterWidgetGoals = () => {
    const [filterValue, setFilterValue] = useState('')

    const goalsFilter = (goals: IGoal$[]) => {
        const filteredGoals = (timePoint?: string) =>
            goals.filter(
                (goal) =>
                    !goal.deleted_at &&
                    goal.finished_at &&
                    format(goal.finished_at, 'yyyy MMMM') === timePoint &&
                    (goal.title.trim().toLocaleLowerCase().includes(filterValue.trim().toLocaleLowerCase()) ||
                        goal.slogan.trim().toLocaleLowerCase().includes(filterValue.trim().toLocaleLowerCase()) ||
                        goal.description.trim().toLocaleLowerCase().includes(filterValue.trim().toLocaleLowerCase())),
            )

        const timePoints = uniq(goals.map((goal) => goal.finished_at && format(goal.finished_at, 'yyyy MMMM')))
        return { filteredGoals, timePoints }
    }

    return { filterValue, setFilterValue, goalsFilter }
}
