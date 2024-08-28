import { useEffect } from 'react'
import { useRoot$ } from '../mst/StoreProvider'

export const useJwtAuth = () => {
    const { userId, autoLogin, initLoading } = useRoot$()

    useEffect(() => {
        autoLogin()
    }, [])

    return { userId, isLoading: initLoading }
}
