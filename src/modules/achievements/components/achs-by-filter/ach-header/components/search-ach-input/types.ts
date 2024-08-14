import { noteStatusSchema } from '@/modules/notes/shared-services/types'
import { z } from 'zod'

const notesFiltersSchema = z.object({
    searchInput: z.string(),
    serverSearchInput: z.string(),
    status: noteStatusSchema,
})

export type INotesFiltersSchema = z.infer<typeof notesFiltersSchema>
