import { useUser$ } from '@/services/user-store/userUser.store'
import { useEffect } from 'react'

export const useJwtAuth = () => {
    const { store, autoLogin } = useUser$()

    useEffect(() => {
        autoLogin()
    }, [])

    return { userId: store?.userId, isLoading: store?.isLoading }
}
