import { compact, uniq } from 'lodash-es'
import { INoteSchema } from '../shared-services/types'
import { format } from 'date-fns'
import { convertStringDate } from '@/helpers/date.helpers'

export const filteredNotesFabric = (
    notes: INoteSchema[] = [],
): {
    timeFrame: string[]
    filteredNotes: (tp: string) => INoteSchema[]
} => {
    const timeFrame = compact(
        uniq(notes.map((note) => note.created_at && format(convertStringDate(note.created_at), 'yyyy MMMM'))),
    )

    const filteredNotes = (timeFrame: string) => {
        return notes.filter(
            (note) => note.created_at && format(convertStringDate(note.created_at), 'yyyy MMMM') === timeFrame,
        )
    }

    return {
        timeFrame,
        filteredNotes,
    }
}
