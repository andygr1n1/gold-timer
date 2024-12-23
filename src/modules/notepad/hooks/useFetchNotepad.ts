import { useUser$ } from '@/modules/app/mst/StoreProvider'
import { useGetNotepadQuery } from '../service/apiNotepadSlice'
import type { INotepad } from '../service/types'

type IRes = {
    isLoading: boolean
    notepad: INotepad | null    
}

export const useFetchNotepad = (): IRes => {
    const { id: userId } = useUser$()

    const { data: notepad, isLoading } = useGetNotepadQuery(userId, { skip: !userId })

    return { isLoading, notepad: notepad || null }
}
