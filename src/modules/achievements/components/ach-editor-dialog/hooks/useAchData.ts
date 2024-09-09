import { useFetchAch } from '@/modules/achievements/services/fetch-ach/useFetchAch'
import { useAchEditorDialog$ } from '../mst/provider'

export const useAchData = () => {
    const { edit_id } = useAchEditorDialog$()
    const { isLoading, data, isFetching, isFetched } = useFetchAch({ id: edit_id })
    return {
        isLoading,
        data,
        isFetched,
        isFetching,
    }
}
