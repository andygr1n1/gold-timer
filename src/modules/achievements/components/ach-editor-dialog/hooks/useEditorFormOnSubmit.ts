import { type FormikHelpers } from 'formik'
import { type IAchEditor } from '@/modules/achievements/services/types'
import { useUpsertAch } from '@/modules/achievements/services/upsert-ach/useUpsertAch'
import { useAchEditorDialog$ } from '../mst/provider'

export const useEditorFormOnSubmit = () => {
    const { onClose } = useAchEditorDialog$()
    const { upsertAch } = useUpsertAch()

    const onSubmit = (values: IAchEditor, formikHelpers: FormikHelpers<IAchEditor>) => {
        const { setSubmitting } = formikHelpers
        upsertAch({
            values,
            onSuccess: () => {
                onClose()
            },
            onSettled: () => {
                setSubmitting(false)
            },
        })
    }

    return { onSubmit }
}
