import { useMutation } from '@tanstack/react-query'
import { IGoalSchema } from '../../../../shared-service/types'
import { convertStringDate, prepareFinishedAtForInsert } from '@/helpers/date.helpers'
import { setGoalDifficulty } from '@/helpers/setGoalDifficulty'
import { mutation_upsertGoal } from './mutation_upsertGoal'
import { useInvalidateGoals } from '@/modules/goals/shared-hooks/useInvalidateGoals.hook'

export const useUpsertGoal = () => {
    const { onSuccess: onGoalMutationSuccess } = useInvalidateGoals()

    const mutation = useMutation({
        mutationFn: ({ goal }: { goal: IGoalSchema }) => {
            goal.finished_at && (goal.finished_at = prepareFinishedAtForInsert(goal.finished_at))
            goal.finished_at && setGoalDifficulty(convertStringDate(goal.finished_at))
            return mutation_upsertGoal({ goal })
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
