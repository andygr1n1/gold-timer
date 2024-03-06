import { resolveData } from '@/functions/resolveData'
import { generateTSClient } from '@/graphql/client'
import { processError } from '@/functions/processMessage'
import { getUserId } from '@/functions/universalCookie.helper'

export const query_fetchNotepadLockedStatus = async (): Promise<boolean> => {
    const client = generateTSClient()

    return await resolveData<boolean, boolean>(
        () =>
            client
                .query({
                    __name: 'query_fetchNotepadLockedStatus',
                    notepad_by_pk: {
                        __args: { owner_id: getUserId() },
                        locked: true,
                    },
                })
                .then((res) => res?.notepad_by_pk?.locked || false),
        (e) => {
            processError(`query_fetchNotepadLockedStatus: ${e}`)
            return false
        },
    )
}
