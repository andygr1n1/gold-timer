import { useQuery, useQueryClient } from '@tanstack/react-query'
import { profileService } from '../services'
import { type IProfile$ } from './types'

export const useProfile$ = () => {
    const queryClient = useQueryClient()

    const { data: store } = useQuery<IProfile$>({
        queryKey: profileService.useProfile$(),
        staleTime: Infinity,
        refetchOnWindowFocus: false,
        refetchOnMount: false,
        initialData: { editProfile: false, editPassword: false },
    })

    const openEditProfile = () => {
        queryClient.setQueryData<IProfile$>(profileService.useProfile$(), { ...store, editProfile: !store.editProfile })
    }
    const openEditPassword = () => {
        queryClient.setQueryData<IProfile$>(profileService.useProfile$(), { ...store, editPassword: true })
    }

    const onCancel = () => {
        queryClient.setQueryData<IProfile$>(profileService.useProfile$(), { editProfile: false, editPassword: false })
    }

    return {
        store,
        openEditProfile,
        openEditPassword,
        onCancel,
        viewMode: !store.editProfile,
        editPassword: store.editPassword,
    }
}
