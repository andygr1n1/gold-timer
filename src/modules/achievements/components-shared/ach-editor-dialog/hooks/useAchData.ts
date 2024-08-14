import { useFetchAch } from '@/modules/achievements/services/fetch-ach/useFetchAch'
import { useAchEditor$ } from '../stores/useAchEditor.store'

export const useAchData = () => {
    const { id } = useAchEditor$()
    const { isLoading, data } = useFetchAch({ id })
    return {
        isLoading,
        data,
    }
}
