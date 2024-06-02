import { resolveData } from '@/functions/tryCatchRequest'
import { processError } from '@/functions/processMessage'
import { generateTSClient } from '@/graphql/client'
import { getUserId } from '@/functions/getUserData'

export const mutation_notepadDescription = async (description: string): Promise<string> => {
    const client = generateTSClient()

    return await resolveData<string, string>(
        () =>
            client
                .mutation({
                    __name: 'mutation_notepadDescription',
                    insert_notepad_one: {
                        __args: {
                            object: {
                                owner_id: getUserId(),
                                description,
                            },
                            on_conflict: { constraint: 'notepad_pkey', update_columns: ['description'] },
                        },
                        description: true,
                    },
                })
                .then((res) => {
                    return res.insert_notepad_one?.description || ''
                }),
        (e) => {
            processError(`mutation_notepadDescription: ${e}`)
            return ''
        },
    )
}
