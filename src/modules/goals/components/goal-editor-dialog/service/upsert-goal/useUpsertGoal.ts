import { useMutation } from '@tanstack/react-query'
import { type IGoalSchema } from '../../../../shared-service/types'
import { mutation_upsertGoal } from './mutation_upsertGoal'
import { useInvalidateGoals } from '@/modules/goals/shared-hooks/useInvalidateGoals'
import { goalSnapshotOut } from './goalSnapshotOut.helper'

export const useUpsertGoal = () => {
    const { onSuccess: onGoalMutationSuccess } = useInvalidateGoals()

    const mutation = useMutation({
        mutationFn: ({ goal }: { goal: IGoalSchema }) => {
            return mutation_upsertGoal({ goal: goalSnapshotOut({ goal }) })
        },
        onSuccess: (res) => {
            onGoalMutationSuccess(res)
        },
    })

    const upsertGoal = (props: { goal: IGoalSchema; onSuccess?: () => void; onSettled?: () => void }) => {
        mutation.mutate({ goal: props.goal }, { onSuccess: props.onSuccess, onSettled: props.onSettled })
    }

    return { upsertGoal }
}
