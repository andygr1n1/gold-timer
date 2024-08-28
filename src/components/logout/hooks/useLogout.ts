import { useMutation, useQueryClient } from '@tanstack/react-query'
import { processError } from '@/helpers/processMessage'
import { server_logoutUser } from '../services/server_logoutUser'
import { useUser$ } from '@/services/user-store/userUser.store'

export const useLogout = () => {
    const queryCLient = useQueryClient()
    const userStore = useUser$()
    const mutation = useMutation({
        mutationFn: () => server_logoutUser(),
        onError: (error) => {
            processError(error.message)
        },
        onSuccess: () => {
            userStore.logout(queryCLient)
        },
    })

    const logout = () => mutation.mutate()

    return { logout }
}
