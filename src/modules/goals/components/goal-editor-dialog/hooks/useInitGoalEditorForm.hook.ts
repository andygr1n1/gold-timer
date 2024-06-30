import { useFormikContext } from 'formik'
import { useGoalEditorFormInitialValues } from './useGoalEditorFormInitialValues.hook'
import { IGoalSchema } from '@/modules/goals/shared-service'
import { useEffect } from 'react'
import { KEY_GoalRitualStore } from '../stores/goal-ritual-store/types'
import { useQueryClient } from '@tanstack/react-query'

export const useInitGoalEditorForm = () => {
    const { initialValues, goalEditorMode, state } = useGoalEditorFormInitialValues()
    const formikContext = useFormikContext<IGoalSchema>()
    const queryClient = useQueryClient()

    useEffect(() => {
        if (!state.metadata?.preventRerender) {
            queryClient.resetQueries({ queryKey: KEY_GoalRitualStore() })
            formikContext.setFormikState((prevState) => ({
                ...prevState,
                values: initialValues,
            }))
        }
    }, [goalEditorMode])
}
