import { FormLabel } from '@/components/form/FormLabel'
import { useFormikContext } from 'formik'
import { useNoteData } from '../../../../../hooks/useNoteData'
import { type INoteSchema } from '@/modules/notes/shared-services/types'
import { XTiptap } from '@/components-x/x-tiptap/XTiptap'

export const NoteDescriptionRichInput = () => {
    const formikContext = useFormikContext<INoteSchema>()
    const { isLoading, data } = useNoteData()

    return (
        <div className='relative pb-2'>
            <FormLabel title='Description *' />
            <XTiptap
                isLoading={isLoading}
                content={data?.description || ''}
                onChange={(content) => formikContext.setFieldValue('description', content)}
                readonly={false}
                error={formikContext.touched.description && Boolean(formikContext.errors.description)}
                errorMessage={formikContext.errors.description}
            />
        </div>
    )
}
