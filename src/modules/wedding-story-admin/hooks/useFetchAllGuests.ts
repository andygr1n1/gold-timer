import { sortBy, uniq } from 'lodash-es'
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

    const tables = sortBy(uniq(guests?.map((guest) => guest.table)))

    return {
        isLoading,
        groups,
        guests,
        tables,
        totalGuests,
        totalRegisteredGuests,
        totalCheckedInGuests,
    }
}
