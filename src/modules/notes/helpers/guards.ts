/* */

import { INoteStatus, noteStatus } from '@/modules/notes/shared-services/types'

export const isActiveNoteStatus = (status: INoteStatus) => {
    return status === noteStatus.active
}

export const isArchivedNoteStatus = (status: INoteStatus) => {
    return status === noteStatus.archived
}

export const isDeletedNoteStatus = (status: INoteStatus) => {
    return status === noteStatus.deleted
}

export const isFavoriteNoteStatus = (status: INoteStatus) => {
    return status === noteStatus.favorite
}
