import { useEffect, useState } from 'react'
import { getGoalsFilterParam } from '../helpers/goalsFilterParamLocalForage'

export const useSetGoalsParamsFilter = () => {
    const [filter, setFilter] = useState<string | null>(null)

    useEffect(() => {
        ;(async () => {
            const data = await getGoalsFilterParam()
            setFilter(data || 'active')
        })()
    }, [])
    return { filter }
}
