import { compact, uniq } from 'lodash-es'
import { format } from 'date-fns'
import { convertStringDate } from '@/helpers/date.helpers'
import { type IStorySchema } from '../services/types'

export const filteredStoriesFabric = (
    stories: IStorySchema[] = [],
): {
    timeFrame: string[]
    filtered: (tp: string) => IStorySchema[]
} => {
    const timeFrame = compact(
        uniq(stories.map((story) => story.created_at && format(convertStringDate(story.created_at), 'yyyy'))),
    )

    const filtered = (timeFrame: string) => {
        return stories.filter(
            (story) => story.created_at && format(convertStringDate(story.created_at), 'yyyy') === timeFrame,
        )
    }

    return {
        timeFrame,
        filtered,
    }
}
