import { useQuery } from '@tanstack/react-query'
import { profileService } from '../profileService'
import { useUser$ } from '@/services/user-store/userUser.store'

export const useFetchProfileInfo = () => {
    const { userId } = useUser$()
    const { isLoading, data } = useQuery(profileService.useFetchProfileInfo({ id: userId }))

    return {
        isLoading,
        data,
    }
}
