import { cast } from '@/helpers'
import { calculateCreatedDaysAgo } from '@/helpers/date.helpers'
import { type IAch } from '@/modules/achievements/services/types'
import { useFormikContext } from 'formik'

export const AchCreatedDaysAgo = () => {
    const formikContext = useFormikContext<IAch>()

    const { created_at } = formikContext.values
    const createdDaysAgo = calculateCreatedDaysAgo(cast(formikContext.values.created_at))

    const createString = !!createdDaysAgo ? `${createdDaysAgo} ${createdDaysAgo === 1 ? 'day' : 'days'} ago` : 'today'

    return (
        <>
            {created_at && (
                <div className='flex items-center gap-2 font-extralight text-xs min-w-fit'>{createString}</div>
            )}
        </>
    )
}
