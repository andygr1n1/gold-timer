import { useMutation } from '@tanstack/react-query'
import { mutation_updateAchIsArchived } from '../../services/mutation_updateAchIsArchived'
import { useInvalidateAchs } from '../../hooks/useInvalidateAchs'

export const useUpdateAchIsArchived = () => {
    const { onSuccess } = useInvalidateAchs()

    const mutation = useMutation({
        mutationFn: ({ id, isArchived }: { id: string; isArchived: boolean }) =>
            mutation_updateAchIsArchived({ id, isArchived }),
        onSuccess: () => {
            onSuccess()
        },
    })

    const toggleArchived = ({ id, isArchived }: { id: string; isArchived: boolean }) => {
        mutation.mutate({ id, isArchived })
    }

    return { toggleArchived }
}
