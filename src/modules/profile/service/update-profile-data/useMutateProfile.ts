import { useMutation } from '@tanstack/react-query'

import { IHero } from '../types'
import { mutation_updateProfile } from './mutation_updateProfile'
import { KEY_FetchProfileData } from '../keys'

export const useMutateProfile = () => {
    const mutation = useMutation({
        mutationFn: ({ data }: { data: IHero }) => {
            return mutation_updateProfile(data)
        },
        onSuccess: (res) => {
            if (!res) return
            window.queryClient.invalidateQueries({ queryKey: KEY_FetchProfileData() })
        },
    })

    return mutation
}
