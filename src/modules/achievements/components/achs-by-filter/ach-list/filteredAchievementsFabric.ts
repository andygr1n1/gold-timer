import { convertStringDate } from '@/helpers/date.helpers'
import { format } from 'date-fns'
import { compact, uniq } from 'lodash-es'
import { IAchSchema } from '../../../services/types'

export const filteredAchievementsFabric = (achievements: IAchSchema[]) => {
    const timeFrame = compact(
        uniq(achievements.map((item) => item.created_at && format(convertStringDate(item.created_at), 'yyyy'))),
    )

    const filteredAchievements = (timeFrame: string) => {
        return achievements.filter(
            (item) => item.created_at && format(convertStringDate(item.created_at), 'yyyy') === timeFrame,
        )
    }

    return { timeFrame, filteredAchievements }
}
