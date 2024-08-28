import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

export const useRestoreNoteModuleParams = () => {
    const location = useLocation()
    const [data, setData] = useState<{ params: string; filter: string; label: string }>({
        params: '',
        filter: '',
        label: '',
    })

    useEffect(() => {
        // Save the current URL to localStorage every time it changes
        const currentPath = localStorage.getItem('notes-module-restore-url')

        const params = currentPath?.split('?')?.[1] || 'filter=active'
        const regex = /filter=([^&]+)(?:.*label=([^&]+))?/
        const matches = params.match(regex)
        const filter = matches?.[1] || ''
        const label = matches?.[2] || ''
        setData({ params, filter, label })
    }, [])

    return { location, ...data }
}
