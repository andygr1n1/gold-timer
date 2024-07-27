import { FormikHelpers } from 'formik'
import { useAchEditor$ } from '../stores/useAchEditor.store'
import { IAchSchema } from '@/modules/achievements/services/types'
import { useUpsertAch } from '@/modules/achievements/services/upsert-ach/useUpsertAch'

export const useEditorFormOnSubmit = () => {
    const { onCancel } = useAchEditor$()
    const { upsertAch } = useUpsertAch()

    const onSubmit = (values: IAchSchema, formikHelpers: FormikHelpers<IAchSchema>) => {
        const { setSubmitting } = formikHelpers
        upsertAch({
            values,
            onSuccess: () => {
                onCancel()
            },
            onSettled: () => {
                setSubmitting(false)
            },
        })
    }

    return { onSubmit }
}
