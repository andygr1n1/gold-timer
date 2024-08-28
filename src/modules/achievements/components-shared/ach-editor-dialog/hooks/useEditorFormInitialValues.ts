import { useMemo } from 'react'
import { formatDateWithTimezone } from '@/helpers/date.helpers'
import { useAchData } from './useAchData.ts'
import { type IAchSchema } from '@/modules/achievements/services/types.ts'

export const useEditorFormInitialValues = () => {
    const { data } = useAchData()
    const initialValues: IAchSchema = useMemo(() => initialAch(), [])

    return { initialValues: data || initialValues }
}

const initialAch = (): IAchSchema => ({
    id: crypto.randomUUID(),
    created_at: formatDateWithTimezone(),
    deleted_at: null,
    is_favorite: false,
    title: '',
    description: '',
    img_path: '',
})
