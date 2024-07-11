import { query_artifactsCount } from './query_artifactsCount'

export const KEY_FetchArtifactsCount = () => ['useFetchArtifactsCount']

export const dashboardService = {
    useFetchArtifactsCount: ({ userId }: { userId: string }) => ({
        queryKey: ['dashboardService', 'useFetchArtifactsCount', userId],
        queryFn: async () => await query_artifactsCount(userId),
        staleTime: 1000,
        refetchOnWindowFocus: false,
        refetchOnMount: false,
        enabled: !!userId,
    }),
}
