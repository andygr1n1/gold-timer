import localForage from 'localforage'

const goalsFilterParam = localForage.createInstance({
    name: 'goals_filter_param',
})

export const setGoalsFilterParam = (param: string) => {
    goalsFilterParam.setItem('goals_filter_param', JSON.parse(JSON.stringify(param)))
}

export const getGoalsFilterParam = (): Promise<string | null> => {
    return goalsFilterParam.getItem('goals_filter_param')
}
