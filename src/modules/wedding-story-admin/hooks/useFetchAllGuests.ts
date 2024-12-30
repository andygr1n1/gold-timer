import { useGetAllWeddingGroupsQuery } from '../services/apiWeddingStorySlice'

export const useFetchAllGuests = () => {
    const { data: groups = [], isLoading } = useGetAllWeddingGroupsQuery()

    const guests = groups?.flatMap((ws) => ws.wedding_guests)
    const totalGuests = guests?.length

    const totalRegisteredGuests = groups?.reduce(
        (acc, curr) => acc + curr.wedding_guests.filter(() => !!curr.registration).length,
        0,
    )

    const totalCheckedInGuests = guests?.filter((guest) => !!guest.accepted).length

    return {
        isLoading,
        groups,
        guests,
        totalGuests,
        totalRegisteredGuests,
        totalCheckedInGuests,
    }
}
