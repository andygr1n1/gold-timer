import { flatten } from 'lodash-es'
import { IGoal } from '../service/types'

export const getSelectedGoalFromCache = (data: IGoal[] | { pages: { data: IGoal[] }[] }, goalId: string) => {
    const goals: IGoal[] =
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

export const pushGoalInCache = (data: IGoal[] | { pages: { data: IGoal[] }[] }, goal: IGoal) => {
    'pages' in data ? data.pages[0].data.push(goal) : data.push(goal)
    return data
}
