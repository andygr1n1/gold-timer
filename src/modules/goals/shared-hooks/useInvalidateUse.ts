import { useQueryClient } from '@tanstack/react-query'
import { type IUserSchema } from '@/services/types'
import { KEY_FetchUserDetails } from '../shared-service/fetch-user-details/types'

export const useInvalidateUser = () => {
    const queryClient = useQueryClient()

    const onSuccess = (res: IUserSchema | undefined) => {
        const userId = res?.id

        userId &&
            queryClient.invalidateQueries({
                queryKey: KEY_FetchUserDetails(userId),
            })
    }

    return { onSuccess }
}
