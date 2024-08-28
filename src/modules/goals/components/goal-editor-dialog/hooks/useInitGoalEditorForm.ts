import { useFormikContext } from 'formik'
import { useGoalEditorFormInitialValues } from './useGoalEditorFormInitialValues'
import { type IGoalSchema } from '@/modules/goals/shared-service'
import { useEffect } from 'react'
import { KEY_GoalRitualStore } from '../stores/goal-ritual-store/types'
import { useQueryClient } from '@tanstack/react-query'

export const useInitGoalEditorForm = () => {
    const { initialValues, goalEditorMode, store } = useGoalEditorFormInitialValues()
    const formikContext = useFormikContext<IGoalSchema>()
    const queryClient = useQueryClient()

    useEffect(() => {
        if (!store.metadata?.preventRerender) {
            queryClient.resetQueries({ queryKey: KEY_GoalRitualStore() })
            formikContext.setFormikState((prevState) => ({
                ...prevState,
                values: initialValues,
            }))
        }
    }, [goalEditorMode])
}
