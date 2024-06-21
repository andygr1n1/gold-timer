import { useMutation } from '@tanstack/react-query'

import { processError, processSuccess } from '@/helpers/processMessage'
import { server_verifyActivationCode } from './server_verifyActivationCode'
import { getParam_Activation } from '@/helpers/urlSearchParams'
import { useNavigate } from 'react-router'
import { APP_ROUTES_ENUM } from '@/services/enums'

export const useVerifyActivationCode = () => {
    const navigate = useNavigate()

    const activationCode = getParam_Activation()

    const mutation = useMutation({
        mutationFn: ({ activationCode }: { activationCode?: string | null }) =>
            server_verifyActivationCode({ activationCode }),
        onError: (error) => {
            processError(error.message)
        },
        onSuccess: () => {
            processSuccess(`Welcome to Kzen`)
        },
        onSettled: () => {
            navigate(`/${APP_ROUTES_ENUM.LOGIN}`, { replace: true })
        },
    })

    const verifyActivationCode = () => {
        mutation.mutate({ activationCode })
    }

    return { verifyActivationCode }
}
