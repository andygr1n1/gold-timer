import { useQuery, useQueryClient } from '@tanstack/react-query'
import { IGoalRitualSchema, KEY_GoalRitualStore } from './types'
import { IGoalSchema, goalRitualType } from '@/modules/goals/shared-service'
import { useFormikContext } from 'formik'
import { formatDateWithTimezone } from '@/helpers/date.helpers'

export const useGoalRitual$ = () => {
    const queryClient = useQueryClient()
    const formikContext = useFormikContext<IGoalSchema>()

    const { data: state } = useQuery<IGoalRitualSchema>({
        queryKey: KEY_GoalRitualStore(),
        staleTime: Infinity,
        refetchOnWindowFocus: false,
        refetchOnMount: false,
        initialData: { ritualize: false },
    })

    const toggleRitualize = () => {
        const ritualize = !state.ritualize
        queryClient.setQueryData<IGoalRitualSchema>(KEY_GoalRitualStore(), {
            ...state,
            ritualize,
        })

        if (ritualize) {
            formikContext.setFieldValue('goal_ritual', {
                ritual_id: crypto.randomUUID(),
                ritual_type: goalRitualType.interval_in_days,
                ritual_power: 1,
                ritual_interval: 1,
                created_at: formikContext.values.created_at || formatDateWithTimezone(),
            })
        } else {
            formikContext.setFieldValue('goal_ritual', null)
        }
    }

    return { ritualize: state.ritualize, toggleRitualize }
}
