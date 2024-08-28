import { convertStringDate } from '@/helpers/date.helpers'
import { type INoteSchema } from '@/modules/notes/shared-services/types'
import { useFormikContext } from 'formik'

export const NoteCreatedDaysAgo = () => {
    const formikContext = useFormikContext<INoteSchema>()

    const { created_at } = formikContext.values
    const createdDaysAgo = calculateCreatedDaysAgo(formikContext.values)

    const createString = !!createdDaysAgo ? `${createdDaysAgo} ${createdDaysAgo === 1 ? 'day' : 'days'} ago` : 'today'

    return (
        <>
            {created_at && (
                <div className='flex items-center gap-2 font-extralight text-xs min-w-fit'>
                    {/* <span>created </span> */}
                    {createString}
                </div>
            )}
        </>
    )
}

const calculateCreatedDaysAgo = (note: INoteSchema): number => {
    if (!note.created_at) return 0
    const created = note.created_at
    const today = Date.now()
    const createdAt = convertStringDate(created).getTime()
    const diff = new Date(today - createdAt)
    return Math.floor(diff.getTime() / (1000 * 3600 * 24))
}
