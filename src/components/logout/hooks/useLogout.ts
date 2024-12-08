import { useMutation } from '@tanstack/react-query'
import { processError } from '@/helpers/processMessage'
import { server_logoutUser } from '../services/server_logoutUser'

import { useRoot$ } from '@/modules/app/mst/StoreProvider'

export const useLogout = () => {
    const { terminateSession } = useRoot$()
    const mutation = useMutation({
        mutationFn: () => server_logoutUser(),
        onError: (error) => {
            processError(error.message)
        },
        onSuccess: () => {
            terminateSession()
        },
    })

    const logout = () => mutation.mutate()

    return { logout }
}
