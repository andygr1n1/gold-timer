import { fragment_weddingGroups } from './fragment_weddingGroups'
import type { IGuestsFilters$ } from '../../mst/stores/GuestsFilters.store'
import { graphql } from '@/api/tada'

export const queryWeddingGroups = () => {
    const query = graphql(
        `
            query wedding_groups {
                wedding_groups(order_by: { created_at: desc }) {
                    ...Fragment_weddingGroups
                }
            }
        `,
        [fragment_weddingGroups],
    )
    return query
}

export const queryWeddingGroupsByFilter = () => {
    const query = graphql(
        `
            query wedding_groups($where: wedding_groups_bool_exp) {
                wedding_groups(where: $where, order_by: { created_at: desc }) {
                    ...Fragment_weddingGroups
                }
            }
        `,
        [fragment_weddingGroups],
    )
    return query
}

export const getHideFilter = (filters: IGuestsFilters$): boolean | null => {
    if (filters.hidden && filters.visible) {
        return null
    } else if (filters.hidden) {
        return filters.hidden
    } else if (filters.visible) {
        return !filters.visible
    }
    return null
}

export const getRegisteredFilter = (filters: IGuestsFilters$): boolean | null => {
    if (filters.registered && filters.notRegistered) {
        return null
    } else if (filters.registered) {
        return filters.registered
    } else if (filters.notRegistered) {
        return !filters.notRegistered
    }
    return null
}

export const getAcceptedFilter = (filters: IGuestsFilters$): boolean | null => {
    if (filters.checkedIn && filters.notCheckedIn) {
        return null
    } else if (filters.checkedIn) {
        return filters.checkedIn
    } else if (filters.notCheckedIn) {
        return !filters.notCheckedIn
    }
    return null
}
