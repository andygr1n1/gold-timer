import { useQuery } from '@tanstack/react-query'
import { profileService } from '../profileService'
import { useUserStore$ } from '@/services/user-store/useUserStore.service'

export const useFetchProfileInfo = () => {
    const { userId } = useUserStore$()
    const { isLoading, data } = useQuery(profileService.useFetchProfileInfo({ id: userId }))

    return {
        isLoading,
        data,
    }
}
