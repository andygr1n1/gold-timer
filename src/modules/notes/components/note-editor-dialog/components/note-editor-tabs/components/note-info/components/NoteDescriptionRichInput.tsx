import { FormLabel } from '@/components/form/FormLabel'
import { useFormikContext } from 'formik'
import { KzenEditor } from '@/components-x/x-rte'
import { useNoteData } from '../../../../../hooks/useNoteData'
import { INoteSchema } from '@/modules/notes/shared-services/types'

export const NoteDescriptionRichInput = () => {
    const formikContext = useFormikContext<INoteSchema>()
    const { isLoading, data } = useNoteData()

    return (
        <div className='relative pb-2'>
            <FormLabel title='Description *' />
            <KzenEditor
                wrapperClassName='min-h-52'
                isLoading={isLoading}
                content={data?.description}
                onChangeContent={(content) => formikContext.setFieldValue('description', content)}
                readOnly={false}
                error={formikContext.touched.description && Boolean(formikContext.errors.description)}
                errorMessage={formikContext.errors.description}
            />
        </div>
    )
}
