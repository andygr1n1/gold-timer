import { calculateCreatedDaysAgo } from '@/helpers/date.helpers'
import { type IAchSchema } from '@/modules/achievements/services/types'
import { useFormikContext } from 'formik'

export const AchCreatedDaysAgo = () => {
    const formikContext = useFormikContext<IAchSchema>()

    const { created_at } = formikContext.values
    const createdDaysAgo = calculateCreatedDaysAgo(formikContext.values.created_at)

    const createString = !!createdDaysAgo ? `${createdDaysAgo} ${createdDaysAgo === 1 ? 'day' : 'days'} ago` : 'today'

    return (
        <>
            {created_at && (
                <div className='flex items-center gap-2 font-extralight text-xs min-w-fit'>{createString}</div>
            )}
        </>
    )
}
