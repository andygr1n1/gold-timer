import { FormLabel } from '@/components/form/FormLabel'
import { useFormikContext } from 'formik'
import { KzenEditor } from '@/components-x/x-rte'
import { useAchData } from '../../../../../hooks/useAchData'
import { IAchSchema } from '@/modules/achievements/services/types'

export const AchDescriptionRichInput = () => {
    const formikContext = useFormikContext<IAchSchema>()
    const { isLoading, data } = useAchData()

    return (
        <div className='relative pb-2'>
            <FormLabel title='Description' />
            <KzenEditor
                wrapperClassName='min-h-52'
                isLoading={isLoading}
                content={data?.description}
                onChangeContent={(content) => formikContext.setFieldValue('description', content)}
                readOnly={false}
                placeholder='Description'
                error={formikContext.touched.description && Boolean(formikContext.errors.description)}
                errorMessage={formikContext.errors.description}
            />
        </div>
    )
}
