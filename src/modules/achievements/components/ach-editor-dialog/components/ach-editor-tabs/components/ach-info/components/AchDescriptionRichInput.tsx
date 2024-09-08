import { FormLabel } from '@/components/form/FormLabel'
import { useFormikContext } from 'formik'
import { useAchData } from '../../../../../hooks/useAchData'
import { type IAch } from '@/modules/achievements/services/types'
import { XTiptap } from '@/components-x/x-tiptap/XTiptap'

export const AchDescriptionRichInput = () => {
    const formikContext = useFormikContext<IAch>()
    const { isLoading, data } = useAchData()

    return (
        <div className='relative pb-2'>
            <FormLabel title='Description' />
            <XTiptap
                // wrapperClassName='min-h-52'
                isLoading={isLoading}
                content={data?.description || ''}
                onChange={(content) => formikContext.setFieldValue('description', content)}
                readonly={false}
                // error={formikContext.touched.description && Boolean(formikContext.errors.description)}
                // errorMessage={formikContext.errors.description}
            />
        </div>
    )
}
