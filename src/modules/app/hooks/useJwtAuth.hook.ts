import { useEffect } from 'react'
import { useRoot$ } from '../mst/StoreProvider'
import { useQueryClient } from '@tanstack/react-query'

export const useJwtAuth = () => {
    const queryClient = useQueryClient()
    const { user, autoLogin, initLoading } = useRoot$()

    useEffect(() => {
        autoLogin({ queryClient })
    }, [])

    return { userId: user.id, isLoading: initLoading }
}
