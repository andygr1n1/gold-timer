import { useUserStore } from '@/services/user-store/useUserStore.service'
import { useEffect } from 'react'

export const useJwtAuth = () => {
    const { store, autoLogin } = useUserStore()

    useEffect(() => {
        autoLogin()
    }, [store?.storeId])

    return { userId: store?.userId, isLoading: store?.isLoading }
}
