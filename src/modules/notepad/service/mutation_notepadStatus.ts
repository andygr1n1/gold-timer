import { resolveData } from '@/helpers/tryCatchRequest'
import { processError } from '@/helpers/processMessage'
import { generateTSClient } from '@/graphql/client'
import { getUserId } from '@/helpers/getUserId'

export const mutation_notepadStatus = async (locked: boolean): Promise<boolean> => {
    const client = await generateTSClient()

    return await resolveData<boolean, boolean>(
        () =>
            client
                .mutation({
                    __name: 'mutation_notepadStatus',
                    update_notepad_by_pk: {
                        __args: {
                            pk_columns: { owner_id: getUserId() },
                            _set: { locked },
                        },
                        locked: true,
                    },
                })
                .then((res) => {
                    return res.update_notepad_by_pk?.locked || false
                }),
        (e) => {
            processError(`mutation_notepadStatus: ${e}`)
            return false
        },
    )
}
