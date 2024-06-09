import { useMutation } from '@tanstack/react-query'

import { processError, processSuccess } from '@/functions/processMessage'
import { server_verifyActivationCode } from './server_verifyActivationCode'
import { getParam_Activation } from '@/functions/urlSearchParams'
import { useNavigate } from 'react-router'
import { APP_ROUTES_ENUM } from '@/helpers'
import { setAccessIdInCookie } from '@/functions/universalCookie'
import { useUserStore } from '@/services/user-store/useUserStore'

export const useVerifyActivationCode = () => {
    const navigate = useNavigate()
    const { refreshUserStore } = useUserStore()
    const activationCode = getParam_Activation()

    const mutation = useMutation({
        mutationFn: ({ activationCode }: { activationCode?: string | null }) =>
            server_verifyActivationCode({ activationCode }),
        onError: (error) => {
            processError(error.message)
        },
        onSuccess: (res) => {
            setAccessIdInCookie(res?.sessionInfo.accessId)
            processSuccess(`Welcome to Kzen`)
        },
        onSettled: () => {
            refreshUserStore()
            navigate(`/${APP_ROUTES_ENUM.LOGIN}`, { replace: true })
        },
    })

    const verifyActivationCode = () => {
        mutation.mutate({ activationCode })
    }

    return { verifyActivationCode }
}
