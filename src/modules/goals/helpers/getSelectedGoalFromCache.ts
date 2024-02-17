import { flatten } from 'lodash-es'
import { IActiveGoalOptimized } from '../interfaces/types'

export const getSelectedGoalFromCache = (
    data: IActiveGoalOptimized[] | { pages: { data: IActiveGoalOptimized[] }[] },
    goalId: string,
) => {
    const goals: IActiveGoalOptimized[] =
        'pages' in data
            ? flatten(
                  data.pages.map((page) => {
                      return [...page.data]
                  }),
              )
            : data

    const selected = goals.find((goal) => goal.id === goalId)
    return selected
}

export const pushGoalInCache = (
    data: IActiveGoalOptimized[] | { pages: { data: IActiveGoalOptimized[] }[] },
    goal: IActiveGoalOptimized,
) => {
    'pages' in data ? data.pages[0].data.push(goal) : data.push(goal)
    return data
}
