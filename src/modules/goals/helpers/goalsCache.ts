import { flatten } from 'lodash-es'
import { type IGoalSchema } from '../shared-service/types'

export const getSelectedGoalFromCache = (
    data: IGoalSchema[] | { pages: { data: IGoalSchema[] }[] },
    goalId: string,
) => {
    const goals: IGoalSchema[] =
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

export const pushGoalInCache = (data: IGoalSchema[] | { pages: { data: IGoalSchema[] }[] }, goal: IGoalSchema) => {
    'pages' in data ? data.pages[0]?.data.push(goal) : data.push(goal)
    return data
}
