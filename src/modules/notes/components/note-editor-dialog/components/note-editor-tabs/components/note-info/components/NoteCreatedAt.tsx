import { format } from 'date-fns'
import { convertStringDate } from '@/helpers/date.helpers'
import { useFormikContext } from 'formik'
import { INoteSchema } from '@/modules/notes/shared-services/types'
import { NoteCreatedDaysAgo } from './NoteCreatedDaysAgo'

export const NoteCreatedAt = () => {
    const formikContext = useFormikContext<INoteSchema>()

    const created = formikContext.values.created_at

    return created ? (
        <div className='flex items-center gap-2 mb-5 opacity-80 flex-wrap'>
            <div className='font-extralight text-xs min-w-fit'>created</div>
            <NoteCreatedDaysAgo />
            <div className='font-extralight text-xs min-w-fit'>
                on {format(convertStringDate(created), 'do MMMM yyyy, EEEE')}
            </div>
        </div>
    ) : null
}
