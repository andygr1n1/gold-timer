import { useLocation } from 'react-router-dom'

import {
    isActiveNoteStatus,
    isArchivedNoteStatus,
    isDeletedNoteStatus,
    isFavoriteNoteStatus,
} from '../../../helpers/guards'
import { INoteStatus } from '@/modules/notes/shared-services/types'

export const useGetNotesParamsFilter = () => {
    const location = useLocation()
    const paramFilter: INoteStatus = location.state?.filter

    const isActive = isActiveNoteStatus(paramFilter)
    const isFavorite = isFavoriteNoteStatus(paramFilter)
    const isDeleted = isDeletedNoteStatus(paramFilter)
    const isArchived = isArchivedNoteStatus(paramFilter)

    return { paramFilter, isArchived, isActive, isFavorite, isDeleted }
}
