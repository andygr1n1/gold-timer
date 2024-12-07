import { query_artifactsCount } from './query_artifactsCount'

export const KEY_FetchArtifactsCount = () => ['useFetchArtifactsCount']

export const dashboardService = {
    useFetchArtifactsCount: ({ userId }: { userId: string }) => ({
        queryKey: ['dashboardService', 'useFetchArtifactsCount', userId],
        queryFn: query_artifactsCount,
        staleTime: 1000,
        refetchOnWindowFocus: false,
        refetchOnMount: false,
        enabled: !!userId,
    }),
}
