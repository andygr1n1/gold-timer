import { type IEditor$Schema, editorModeEnum } from '@/services/types'
import { useQuery, useQueryClient } from '@tanstack/react-query'
import { achService } from '../../../services/achService'
import { useCallback } from 'react'

export const useAchEditor$ = () => {
    const queryClient = useQueryClient()

    const { data: editorMode } = useQuery(achService.editor$((data) => data.editorMode))
    const { data: newMode } = useQuery(achService.editor$((data) => data.editorMode === editorModeEnum.new))
    const { data: editMode } = useQuery(achService.editor$((data) => data.editorMode === editorModeEnum.edit))
    const { data: viewMode } = useQuery(achService.editor$((data) => data.editorMode === editorModeEnum.view))
    const { data: open } = useQuery(achService.editor$((data) => data.open))
    const { data: id } = useQuery(achService.editor$((data) => data.id))

    const setStore = useCallback(
        (store: IEditor$Schema) => {
            queryClient.setQueryData<IEditor$Schema>(achService.editor$Key(), store)
        },
        [queryClient],
    )

    const onCancel = useCallback(() => {
        queryClient.setQueryData<IEditor$Schema>(achService.editor$Key(), {
            open: false,
            id: null,
            editorMode: null,
        })
    }, [queryClient])

    return { open, newMode, editMode, viewMode, editorMode, id, setStore, onCancel }
}
