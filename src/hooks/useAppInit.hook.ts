import { useEffect } from 'react'
import { rootStore$ } from '@/StoreProvider'

export const useAppInit = () => {
    useEffect(() => {
        rootStore$.fetchAndStabilizeAppData()
    }, [])
}
