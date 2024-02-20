import { useQuery } from '@tanstack/react-query'
import { KEY_FetchProfileData } from '../keys'
import { query_fetchProfileData } from './query_fetchProfileData'
import { IHero } from '../types'
import { optimizeProfileData } from '../../helpers/optimizeProfileData'

export const useProfileData = (): { data: IHero; isLoading: boolean } => {
    const { isLoading, data } = useQuery({
        queryKey: KEY_FetchProfileData(),
        queryFn: async () => await query_fetchProfileData(),
        staleTime: 2000,
        refetchOnWindowFocus: true,
        refetchOnMount: true,
    })
    return {
        isLoading,
        data: data || optimizeProfileData(),
    }
}
