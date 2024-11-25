import { generateClient } from '@/graphql/client'
import { resolveError } from '@/helpers/tryCatchRequest'
import { graphql } from '@/graphql/tada'
import type { IInvitationEditorSchema, IWeddingGroup } from '../types'

export const mutation_editWeddingGroup = async ({
    values,
    weddingGroup,
}: {
    values: IInvitationEditorSchema
    weddingGroup: IWeddingGroup
}) => {
    try {
        const client = await generateClient()

        const groupMutation = graphql(`
            mutation mutation_editWeddingGroup($groupId: uuid!, $name: String!) {
                update_wedding_groups_by_pk(pk_columns: { id: $groupId }, _set: { name: $name }) {
                    id
                }
            }
        `)

        const res = await client.request(groupMutation, { groupId: weddingGroup.id, name: values.groupName })

        const guestMutation = graphql(`
            mutation mutation_editWeddingGuest($guestId: uuid!, $table: Int) {
                update_wedding_guests_by_pk(pk_columns: { id: $guestId }, _set: { table: $table }) {
                    id
                }
            }
        `)

        const guest1Id = weddingGroup.wedding_guests[0]?.id
        guest1Id &&
            (await client.request(guestMutation, {
                guestId: guest1Id,
                table: values.table1 || null,
            }))

        const guest2Id = weddingGroup.wedding_guests[1]?.id
        guest2Id &&
            (await client.request(guestMutation, {
                guestId: guest2Id,
                table: values.table2 || null,
            }))

        return res
    } catch (e) {
        return await resolveError(e)
    }
}
