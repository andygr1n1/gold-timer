import { useLocation } from 'react-router-dom'

export const useUuidFromPath = () => {
    const location = useLocation()
    const uuidRegex = /[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}/
    const match = location.pathname.match(uuidRegex)

    return { id: match?.[0] }
}
