import { useAchEditorDialog$ } from '@/modules/achievements/components/ach-editor-dialog/mst/provider'
import type { IAch } from '@/modules/achievements/services/types'
import { useMutation } from '@tanstack/react-query'
import { useFormikContext } from 'formik'
import { mutation_freezeAch } from '../service/mutation_freezeAch'
import { useInvalidateAchs } from '@/modules/achievements/hooks/useInvalidateAchs'

export const useFreezeAch = () => {
    const { onSuccess } = useInvalidateAchs()
    const formikContext = useFormikContext<IAch>()
    const { edit_id } = useAchEditorDialog$()

    const mutation = useMutation({
        mutationFn: (props: { id: string; freezed: boolean }) => {
            return mutation_freezeAch(props)
        },
        onSuccess,
    })

    const freezeAch = () => {
        const freezed = !formikContext.values.freezed
        formikContext.setFieldValue('freezed', freezed)

        if (edit_id) {
            mutation.mutate({
                id: edit_id,
                freezed,
            })
        }
    }

    return {
        freezeAch,
        freezed: formikContext.values.freezed,
    }
}
