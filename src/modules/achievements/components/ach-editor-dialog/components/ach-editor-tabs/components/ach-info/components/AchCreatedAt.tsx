import { format } from 'date-fns'
import { convertStringDate } from '@/helpers/date.helpers'
import { useFormikContext } from 'formik'
import { type IAch } from '@/modules/achievements/services/types'
import { AchCreatedDaysAgo } from './AchCreatedDaysAgo'

export const AchCreatedAt = () => {
    const formikContext = useFormikContext<IAch>()

    const created = formikContext.values.created_at

    return created ? (
        <div className='flex items-center gap-2 mb-5 opacity-80 flex-wrap'>
            <div className='font-extralight text-xs min-w-fit'>created</div>
            <AchCreatedDaysAgo />
            <div className='font-extralight text-xs min-w-fit'>
                on {format(convertStringDate(created), 'do MMMM yyyy, EEEE')}
            </div>
        </div>
    ) : null
}
