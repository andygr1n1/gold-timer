import { useUserStore } from '@/services/user-store/useUserStore'
import { useEffect } from 'react'

export const useJwtAuth = () => {
    const { store } = useUserStore()

    useEffect(() => {
        console.log('--useJwtAuth--')

        // get access token from cookies
        // send access token on server - validate it.
        // If refresh token is valid, return fresh accessToken and set user id into store
    }, [store?.storeId])

    return { userId: store?.userId }
}
