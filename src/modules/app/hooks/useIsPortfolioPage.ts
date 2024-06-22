import { useLocation } from 'react-router'

export const useIsPortfolioPage = (): boolean => {
    const location = useLocation()

    return (
        location.pathname.trim().toLowerCase().includes('grini') ||
        location.pathname.trim().toLowerCase().includes('andrei')
    )
}
