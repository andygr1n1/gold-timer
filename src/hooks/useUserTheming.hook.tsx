import { syncAppTheme } from '@/modules/stores/themingStore'
import { useAtom } from 'jotai'
import { useEffect } from 'react'

export const useUserTheming = () => {
    const [, syncTheme] = useAtom(syncAppTheme)
    useEffect(() => {
        ;(async () => {
            syncTheme()
        })()
    }, [])
}
