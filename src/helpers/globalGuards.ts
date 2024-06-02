import { APP_ROUTES_ENUM } from './globalEnums'

export const isDashboard = () => window.location.pathname === `/${APP_ROUTES_ENUM.DASHBOARD}`

export const isGoalFilterActive = () => {
    const url = new URL(globalThis.location.href)

    const filter = url.searchParams.get('filter')

    return filter === 'active'
}
