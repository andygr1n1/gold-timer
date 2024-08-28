import { useLocation } from 'react-router-dom'

import {
    isActiveNoteStatus,
    isArchivedNoteStatus,
    isDeletedNoteStatus,
    isFavoriteNoteStatus,
} from '../../../helpers/guards'
import { type INoteStatus } from '@/modules/notes/shared-services/types'
import { isStatusAll } from '@/services/guards'

export const useGetNotesParamsFilter = () => {
    const location = useLocation()
    const paramFilter: INoteStatus = location.state?.filter

    const isActive = isActiveNoteStatus(paramFilter)
    const isFavorite = isFavoriteNoteStatus(paramFilter)
    const isDeleted = isDeletedNoteStatus(paramFilter)
    const isArchived = isArchivedNoteStatus(paramFilter)
    const isAll = isStatusAll(paramFilter)

    return { paramFilter, isArchived, isActive, isFavorite, isDeleted, isAll }
}
