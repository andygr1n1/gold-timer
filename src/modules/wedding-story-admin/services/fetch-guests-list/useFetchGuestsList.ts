import { useQuery } from '@tanstack/react-query'
import { query_fetchGuestsList } from './query_fetchGuestsList'
import { weddingStoryService } from '../weddingStoryService'

export const useFetchGuestsList = () => {
    const { isLoading, data } = useQuery({
        queryKey: weddingStoryService.fetchGuestsList(),
        queryFn: async () => await query_fetchGuestsList(),
        staleTime: 1000,
        refetchOnWindowFocus: false,
        refetchOnMount: true,
        enabled: true,
    })

    const guests = data?.flatMap((ws) => ws.wedding_guests)

    const totalGuests = guests?.length

    const totalRegisteredGuests = data?.reduce(
        (acc, curr) => acc + curr.wedding_guests.filter(() => !!curr.registration).length,
        0,
    )

    const totalCheckedInGuests = guests?.filter((guest) => !!guest.accepted).length

    return {
        isLoading,
        data: data || [],
        totalGuests,
        totalRegisteredGuests,
        totalCheckedInGuests,
    }
}
