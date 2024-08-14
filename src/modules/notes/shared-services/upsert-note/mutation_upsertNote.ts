import { generateTSClient } from '@/graphql/client'
import { resolveError, tryCatchRequest } from '@/helpers/tryCatchRequest'
import { INoteSchema, noteSchema } from '@/modules/notes/shared-services/types'

export const mutation_upsertNote = async (props: { note: INoteSchema }) => {
    const client = await generateTSClient()
    const { note: object } = props
    return await tryCatchRequest<Promise<undefined>, INoteSchema | undefined>(
        () =>
            client
                .mutation({
                    __name: 'mutation_upsertNote',
                    insert_notes_one: {
                        __args: {
                            object,
                            on_conflict: {
                                constraint: 'tasks_pkey',
                                update_columns: ['description', 'tag'],
                            },
                        },
                        id: true,
                        owner_id: true,
                        description: true,
                        tag: true,
                        created_at: true,
                        deleted_at: true,
                        is_favorite: true,
                        archived: true,
                    },
                })
                .then((response) => {
                    const zParse = noteSchema.parse(response.insert_notes_one)
                    return zParse
                }),
        async (e) => await resolveError(e),
    )
}
