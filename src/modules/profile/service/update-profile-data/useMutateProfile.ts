import { useMutation } from '@tanstack/react-query'

import { IHero } from '../types'
import { mutation_updateProfile } from './mutation_updateProfile'
import { KEY_FetchAvatar, KEY_FetchProfileData } from '../keys'

export const useMutateProfile = () => {
    const mutation = useMutation({
        mutationFn: ({ data }: { data: IHero }) => {
            return mutation_updateProfile(data)
        },
        onSuccess: (res) => {
            if (!res) return
            window.queryClient?.invalidateQueries({ queryKey: KEY_FetchProfileData() })
            // *
            // to update the name is Sidebar
            //
            window.queryClient?.invalidateQueries({ queryKey: KEY_FetchAvatar() })
        },
    })

    return mutation
}
