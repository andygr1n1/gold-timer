import { useEffect } from 'react'

export const useTheming = () => {
    useEffect(() => {
        const localStorageData = localStorage.getItem('dark') || 'true'
        document.querySelector('html')!.setAttribute('dark', localStorageData)
    }, [])
}
