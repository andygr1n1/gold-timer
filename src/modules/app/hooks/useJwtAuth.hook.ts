import { useUserStore } from '@/services/user-store/useUserStore'
import { useEffect } from 'react'
import { getSessionCredentials } from '../service/server_getSessionCredentials'

export const useJwtAuth = () => {
    const { store, selectUser } = useUserStore()

    useEffect(() => {
        ;(async () => {
            const user = await getSessionCredentials()
            user &&
                selectUser({
                    storeId: store?.storeId ? store?.storeId : crypto.randomUUID(),
                    role: user.role,
                    userId: user.userId,
                })
        })()
    }, [store?.storeId])

    return { userId: store?.userId }
}
