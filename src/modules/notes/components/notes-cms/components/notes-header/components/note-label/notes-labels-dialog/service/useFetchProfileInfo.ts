import { useQuery } from '@tanstack/react-query'
import { useUser$ } from '@/services/user-store/userUser.store'
import { profileService } from '@/modules/profile/services'

export const useFetchProfileInfo = () => {
    const { userId } = useUser$()
    const { isLoading, data } = useQuery(profileService.useFetchProfileInfo({ id: userId }))

    return {
        isLoading,
        data,
    }
}
