import { query_fetchProfileInfo } from './fetch-profile-info/query_fetchProfileInfo'

export const profileService = {
    useProfile$: () => ['useProfile$'],
    /*  */
    useFetchProfileInfo: ({ id }: { id: string }) => ({
        queryKey: ['profileService', 'useFetchProfileInfo', id],
        queryFn: () => query_fetchProfileInfo({ id }),
        staleTime: 1000,
        refetchOnWindowFocus: false,
        refetchOnMount: false,
        enabled: !!id,
    }),
}
