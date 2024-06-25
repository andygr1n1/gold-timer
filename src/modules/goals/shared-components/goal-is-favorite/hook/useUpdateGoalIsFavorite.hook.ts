import { useMutation } from '@tanstack/react-query'
import { mutation_updateGoalIsFavorite } from '../service/mutation_updateGoalIsFavorite'
import { useInvalidateGoals } from '../../../shared-hooks/useInvalidateGoals.hook'

export const useUpdateGoalIsFavorite = () => {
    const { onSuccess } = useInvalidateGoals()

    const mutation = useMutation({
        mutationFn: ({ goalId, isFavorite }: { goalId: string; isFavorite: boolean }) =>
            mutation_updateGoalIsFavorite({ goalId, isFavorite }),
        onSuccess,
    })

    const toggleFavorite = (props: { goalId: string; isFavorite: boolean }) => {
        const { goalId, isFavorite } = props
        mutation.mutate({ goalId, isFavorite })
    }

    return { toggleFavorite }
}
