import { getAcceptedFilter, getHideFilter, getRegisteredFilter } from '../services/graphql/query_weddingGroups'
import { filterWordsOptimizer } from '@/helpers/filterWordsOptimizer'
import { useGetWeddingGroupsByFilterQuery } from '../services/apiWeddingStorySlice'
import { useAppSelector } from '@/store/useRootStore'
import { selectGuestsFilters } from '../services/weddingStoryFiltersSlice'

export const useFetchFilteredGuests = ({ textFilter }: { textFilter?: string }) => {
    const filters = useAppSelector(selectGuestsFilters)

    const hide = getHideFilter(filters)
    const registration = getRegisteredFilter(filters)
    const accepted = getAcceptedFilter(filters)

    const where = {
        deleted_at: { _is_null: true },
        ...(hide !== null && { hide: { _eq: hide } }),
        ...(registration !== null && { registration: { _eq: registration } }),
        ...(accepted !== null && { wedding_guests: { accepted: { _eq: accepted } } }),
    }

    const { data: groups = [], isLoading } = useGetWeddingGroupsByFilterQuery({ where })

    const filteredData = groups?.filter(
        (group) =>
            filterWordsOptimizer(group.booking_number, textFilter) ||
            filterWordsOptimizer(group.name, textFilter) ||
            group.wedding_guests.find(
                (guest) =>
                    filterWordsOptimizer(guest.first_name, textFilter) ||
                    filterWordsOptimizer(guest.last_name, textFilter) ||
                    filterWordsOptimizer(guest.email, textFilter) ||
                    filterWordsOptimizer(guest.phone, textFilter),
            ),
    )

    return {
        isLoading,
        filteredData,
    }
}
