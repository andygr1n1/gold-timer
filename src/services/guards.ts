import { APP_ROUTES_ENUM } from './enums'
import { IArtifactStatus, artifactStatus } from './types'

export const isDashboard = () => window.location.pathname === `/${APP_ROUTES_ENUM.DASHBOARD}`

export const isGoalFilterActive = () => {
    const url = new URL(globalThis.location.href)

    const filter = url.searchParams.get('filter')

    return filter === 'active'
}

export const isStatusAll = (status: IArtifactStatus) => {
    return status === artifactStatus.all
}

export const isStatusActive = (status: IArtifactStatus) => {
    return status === artifactStatus.active
}

export const isStatusFavorite = (status: IArtifactStatus) => {
    return status === artifactStatus.favorite
}

export const isStatusDeleted = (status: IArtifactStatus) => {
    return status === artifactStatus.deleted
}
