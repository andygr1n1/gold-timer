import { useMutation } from '@tanstack/react-query'

import { processError, notify } from '@/helpers/processMessage'
import { server_resendActivationLink } from './server_resendActivationLink'
import { useDebouncedEmailSender } from '../hooks/useDebouncedEmailSender.hook'

export const useResendActivationLink = (props: { email?: string | null }) => {
    const { email } = props
    const mutation = useMutation({
        mutationFn: ({ email }: { email?: string | null }) => server_resendActivationLink({ email }),
        onError: () => {
            processError('Sending activation link failed')
        },
        onSuccess: () => {
            notify('Email with activation link will appear within a minute')
        },
    })

    const resendEmailDebounced = useDebouncedEmailSender(() => {
        mutation.mutate({ email })
    })

    return { resendActivationLink: resendEmailDebounced }
}
