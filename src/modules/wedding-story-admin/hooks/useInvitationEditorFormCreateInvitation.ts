import type { IInvitationEditorSchema } from '../types'
import { useMutation } from '@tanstack/react-query'
import { processError } from '@/helpers/processMessage'
import { mutation_createInvitation } from '../service/mutation_createInvitation'

export const useInvitationEditorFormCreateInvitation = () => {
    const mutation = useMutation({
        mutationFn: ({ values }: { values: IInvitationEditorSchema }) => mutation_createInvitation({ values }),
        onError: (error) => {
            processError(error.message)
        },
    })

    const createInvitation = ({ values, onSuccess }: { values: IInvitationEditorSchema; onSuccess: () => void }) =>
        mutation.mutate({ values }, { onSuccess })

    return { createInvitation }
}
