import { useMutation } from '@tanstack/react-query'
import { useInvalidateAchs } from '@/modules/achievements/hooks/useInvalidateAchs'
import { mutation_updateAchIsFavorite } from '../../services/mutation_updateAchIsFavorite'

export const useUpdateAchIsFavorite = () => {
    const { onSuccess } = useInvalidateAchs()

    const mutation = useMutation({
        mutationFn: ({ id, isFavorite }: { id: string; isFavorite: boolean }) =>
            mutation_updateAchIsFavorite({ id, isFavorite }),
        onSuccess,
    })

    const toggleFavorite = ({ id, isFavorite }: { id: string; isFavorite: boolean }) => {
        mutation.mutate({ id, isFavorite })
    }

    return { toggleFavorite }
}
