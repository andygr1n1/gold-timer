import { useMutation } from '@tanstack/react-query'

import { processError, processSuccess } from '@/functions/processMessage'
import { server_verifyActivationCode } from './server_verifyActivationCode'
import { getParam_Activation } from '@/functions/urlSearchParams'

export const useVerifyActivationCode = () => {
    const activationCode = getParam_Activation()

    const mutation = useMutation({
        mutationFn: ({ activationCode }: { activationCode?: string | null }) =>
            server_verifyActivationCode({ activationCode }),
        onError: (error) => {
            const errorMessage = String(error).includes('404') ? `Please try again later` : error
            processError(errorMessage)
            // TODO redirect to login
        },
        onSuccess: (res) => {
            console.log('res', res)
            processSuccess(`res`)
        },
    })

    const verifyActivationCode = () => {
        mutation.mutate({ activationCode })
    }

    return { verifyActivationCode }
}
