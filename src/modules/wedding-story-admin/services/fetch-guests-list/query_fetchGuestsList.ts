import { resolveError } from '@/helpers/tryCatchRequest'
import { generateClient } from '@/graphql/client'
import { graphql } from '@/graphql/tada'
import { fragment_weddingGroups } from './fragment_weddingGroups'
import type { IGuestsFilters$ } from '../../mst/stores/GuestsFilters.store'

export const query_fetchGuestsList = async ({ filters }: { filters: IGuestsFilters$ }) => {
    try {
        const client = await generateClient()

        const hide = getHideFilter(filters)
        const registration = getRegisteredFilter(filters)
        const accepted = getAcceptedFilter(filters)

        const whereClause = {
            deleted_at: { _is_null: true },
            ...(hide !== null && { hide: { _eq: hide } }),
            ...(registration !== null && { registration: { _eq: registration } }),
            ...(accepted !== null && { wedding_guests: { accepted: { _eq: accepted } } }),
        }

        const query = graphql(
            `
                query query_fetchWeddingGroups($where: wedding_groups_bool_exp) {
                    wedding_groups(where: $where, order_by: [{ created_at: desc }]) {
                        ...Fragment_weddingGroups
                    }
                }
            `,
            [fragment_weddingGroups],
        )

        const data = await client.request(query, { where: whereClause }).then((data) => {
            return data?.wedding_groups
        })

        return data
    } catch (e) {
        return await resolveError(e)
    }
}

const getHideFilter = (filters: IGuestsFilters$): boolean | null => {
    if (filters.hidden && filters.visible) {
        return null
    } else if (filters.hidden) {
        return filters.hidden
    } else if (filters.visible) {
        return !filters.visible
    }
    return null
}

const getRegisteredFilter = (filters: IGuestsFilters$): boolean | null => {
    if (filters.registered && filters.notRegistered) {
        return null
    } else if (filters.registered) {
        return filters.registered
    } else if (filters.notRegistered) {
        return !filters.notRegistered
    }
    return null
}

const getAcceptedFilter = (filters: IGuestsFilters$): boolean | null => {
    if (filters.checkedIn && filters.notCheckedIn) {
        return null
    } else if (filters.checkedIn) {
        return filters.checkedIn
    } else if (filters.notCheckedIn) {
        return !filters.notCheckedIn
    }
    return null
}
