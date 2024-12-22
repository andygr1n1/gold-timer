import { generateClient } from '@/api/client'
import { resolveError } from '@/helpers/tryCatchRequest'
import { graphql } from '@/api/tada'
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
        const guest2Id = weddingGroup.wedding_guests[1]?.id
        const initialGuest1Table = weddingGroup.wedding_guests[0]?.table
        const initialGuest2Table = weddingGroup.wedding_guests[1]?.table

        if (guest1Id && guest2Id && initialGuest1Table && initialGuest2Table && values.table1 && values.table2) {
            if (
                +initialGuest1Table !== +values.table1 &&
                +initialGuest2Table !== +values.table2 &&
                +initialGuest1Table === +values.table2 &&
                +initialGuest2Table === +values.table1
            ) {
                const resetTablesMutation = graphql(`
                    mutation mutation_resetWeddingGuestTables($guestsIds: [uuid!]!) {
                        update_wedding_guests(where: { id: { _in: $guestsIds } }, _set: { table: null }) {
                            affected_rows
                        }
                    }
                `)

                await client.request(resetTablesMutation, {
                    guestsIds: [guest1Id, guest2Id],
                })
            }
        }

        guest1Id &&
            (await client.request(guestMutation, {
                guestId: guest1Id,
                table: values.table1 || null,
            }))

        guest2Id &&
            (await client.request(guestMutation, {
                guestId: guest2Id,
                table: values.table2 || null,
            }))

        return res
    } catch (e) {
        return await resolveError(e, false)
    }
}
