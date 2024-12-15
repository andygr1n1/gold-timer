import { useQuery } from '@tanstack/react-query'
import { query_fetchGuestsList } from './query_fetchGuestsList'
import { weddingStoryService } from '../weddingStoryService'
import { useGuestsFilters$ } from '../../mst/guestsFilters.provider'
import { filterWordsOptimizer } from '@/helpers/filterWordsOptimizer'

export const useFetchGuestsList = ({ textFilter }: { textFilter?: string }) => {
    const filters = useGuestsFilters$()

    const { isLoading, data } = useQuery({
        queryKey: weddingStoryService.fetchGuestsList(`${JSON.stringify(filters)}`),
        queryFn: async () => await query_fetchGuestsList({ filters }),
        staleTime: 1000,
        refetchOnWindowFocus: false,
        refetchOnMount: true,
    })

    const filteredData = data?.filter(
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

    const guests = data?.flatMap((ws) => ws.wedding_guests)

    const totalGuests = guests?.length

    const totalRegisteredGuests = data?.reduce(
        (acc, curr) => acc + curr.wedding_guests.filter(() => !!curr.registration).length,
        0,
    )

    const totalCheckedInGuests = guests?.filter((guest) => !!guest.accepted).length

    return {
        isLoading,
        filteredData: filteredData || [],
        data: data || [],
        totalGuests,
        totalRegisteredGuests,
        totalCheckedInGuests,
    }
}
