import { IGoal$ } from '@/modules/goals/mst/types'
import { useState } from 'react'

export const useFilterWidgetGoals = () => {
    const [filterValue, setFilterValue] = useState('')

    const goalsFilter = (goals: IGoal$[]) => {
        return goals.filter(
            (goal) =>
                goal.title.trim().toLocaleLowerCase().includes(filterValue.trim().toLocaleLowerCase()) ||
                goal.slogan.trim().toLocaleLowerCase().includes(filterValue.trim().toLocaleLowerCase()) ||
                goal.description.trim().toLocaleLowerCase().includes(filterValue.trim().toLocaleLowerCase()),
        )
    }

    return { filterValue, setFilterValue, goalsFilter }
}
