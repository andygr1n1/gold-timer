import { processError } from '../../../functions/processMessage'
import { INote$SnapshotIn } from '@/modules/notes/mst/types'
import { getOwnerId } from '@/functions/getUserId'
import { resolveData } from '@/functions/resolveData'
import { generateTSClient } from '@/graphql/client'

export const query_fetchNotes = async (): Promise<INote$SnapshotIn[]> => {
    const client = generateTSClient()

    return await resolveData<INote$SnapshotIn[], INote$SnapshotIn[]>(
        () =>
            client
                .query({
                    __name: 'query_fetchNotes',
                    notes: {
                        __args: { order_by: [{ created_at: 'asc' }], where: { owner_id: { _eq: getOwnerId() } } },
                        id: true,
                        description: true,
                        tag: true,
                        created_at: true,
                        deleted_at: true,
                        archived: true,
                    },
                })
                .then((res) => res.notes),
        (e) => {
            processError(`query_fetchNotes: ${e}`)
            return []
        },
    )
}
