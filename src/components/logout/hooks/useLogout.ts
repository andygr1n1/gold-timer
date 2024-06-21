import { useMutation } from '@tanstack/react-query'
import { processError } from '@/helpers/processMessage'
import { server_logoutUser } from '../services/server_logoutUser'
import { useUserStore } from '@/services/user-store/useUserStore.service'

export const useLogout = () => {
    const userStore = useUserStore()
    const mutation = useMutation({
        mutationFn: () => server_logoutUser(),
        onError: (error) => {
            processError(error.message)
        },
        onSuccess: () => {
            userStore.logout()
        },
    })

    const logout = () => mutation.mutate()

    return { logout }
}
