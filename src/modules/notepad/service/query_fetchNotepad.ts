import { resolveData } from '@/helpers/tryCatchRequest'
import { generateTSClient } from '@/graphql/client'
import { processError } from '@/helpers/processMessage'
import { getUserId } from '@/helpers/getUserData'

export const query_fetchNotepad = async (): Promise<string> => {
    const client = generateTSClient()

    return await resolveData<string, string>(
        () =>
            client
                .query({
                    __name: 'query_fetchNotepad',
                    notepad_by_pk: {
                        __args: { owner_id: getUserId() },
                        description: true,
                    },
                })
                .then((res) => res?.notepad_by_pk?.description || ''),
        (e) => {
            processError(`query_fetchNotepad: ${e}`)
            return ''
        },
    )
}
