import { useMutation, useQueryClient } from '@tanstack/react-query'

import { type IUserProfileSchema } from '../types'
import { mutation_updateUserProfile } from './mutation_updateUserProfile'

export const useUpdateUserProfile = () => {
    const queryClient = useQueryClient()

    const mutation = useMutation({
        mutationFn: ({ userProfile }: { userProfile: IUserProfileSchema }) => {
            return mutation_updateUserProfile({ userProfile })
        },
        onSuccess: () => {
            queryClient.invalidateQueries()
        },
    })

    const updateUserProfile = ({
        userProfile,
        onSuccess,
        onSettled,
    }: {
        userProfile: IUserProfileSchema
        onSuccess?: () => void
        onSettled?: () => void
    }) => {
        mutation.mutate({ userProfile }, { onSuccess, onSettled })
    }
    return { updateUserProfile }
}
