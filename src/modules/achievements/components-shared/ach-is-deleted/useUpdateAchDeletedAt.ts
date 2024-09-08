import { useMutation } from '@tanstack/react-query'
import { useInvalidateAchs } from '@/modules/achievements/hooks/useInvalidateAchs'
import { mutation_updateAchDeletedAt } from '../../services/mutation_updateAchDeletedAt'

export const useUpdateAchDeletedAt = () => {
    const { onSuccess } = useInvalidateAchs()

    const mutation = useMutation({
        mutationFn: ({ id, deletedAt }: { id: string; deletedAt: null | string }) =>
            mutation_updateAchDeletedAt({ id, deletedAt }),
        onSuccess: () => {
            onSuccess()
        },
    })

    const updateDeletedAt = ({ id, deletedAt }: { id: string; deletedAt: null | string }) => {
        mutation.mutate({ id, deletedAt })
    }

    return { updateDeletedAt }
}
