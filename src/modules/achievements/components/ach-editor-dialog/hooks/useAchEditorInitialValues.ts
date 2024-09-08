import { useMemo } from 'react'
import { formatDateWithTimezone } from '@/helpers/date.helpers'
import { useAchData } from './useAchData.ts'
import { type IAch, type IAchEditor } from '@/modules/achievements/services/types.ts'

export const useAchEditorInitialValues = () => {
    const { data } = useAchData()
    const initialValues: IAchEditor = useMemo(() => initialAch(data), [!!data])

    return { initialValues: initialValues }
}

const initialAch = (data: IAch | null | undefined): IAchEditor => ({
    id: data?.id || crypto.randomUUID(),
    created_at: data?.created_at || formatDateWithTimezone(),
    deleted_at: data?.deleted_at || null,
    is_favorite: !!data?.is_favorite,
    title: data?.title || '',
    description: data?.description || '',
    img_path: data?.img_path || '',
    archived: !!data?.archived,
})
