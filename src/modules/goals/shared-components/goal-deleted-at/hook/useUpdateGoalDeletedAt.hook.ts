import { useMutation } from '@tanstack/react-query'
import { useInvalidateGoals } from '../../../shared-hooks/useInvalidateGoals.hook'
import { mutation_updateGoalDeletedAt } from '../service/mutation_updateGoalDeletedAt'

export const useUpdateGoalDeletedAt = () => {
    const { onSuccess } = useInvalidateGoals()

    const mutation = useMutation({
        mutationFn: ({ goalId, deletedAt }: { goalId: string; deletedAt: null | string }) =>
            mutation_updateGoalDeletedAt({ goalId, deletedAt }),
        onSuccess,
    })

    const updateGoalDeletedAt = (props: { goalId: string; deletedAt: null | string }) => {
        const { goalId, deletedAt } = props
        mutation.mutate({ goalId, deletedAt })
    }

    return { updateGoalDeletedAt }
}
