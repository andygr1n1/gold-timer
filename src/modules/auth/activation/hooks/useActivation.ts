import { useMutation } from '@tanstack/react-query'

import { processError, notify } from '@/helpers/processMessage'
import { server_verifyActivationCode } from '../service/server_verifyActivationCode'
import { getParam_Activation } from '@/helpers/urlSearchParams'
import { useNavigate } from 'react-router'
import { APP_ROUTES_ENUM } from '@/services/enums'
import { useEffect } from 'react'

export const useActivation = () => {
    const navigate = useNavigate()

    const mutation = useMutation({
        mutationFn: ({ activationCode }: { activationCode?: string | null }) =>
            server_verifyActivationCode({ activationCode }),
        onError: (error) => {
            processError(error.message)
        },
        onSuccess: () => {
            notify(`Welcome to Kzen`)
        },
        onSettled: () => {
            navigate(`/${APP_ROUTES_ENUM.LOGIN}`, { replace: true })
        },
    })

    const activationCode = getParam_Activation()

    useEffect(() => {
        mutation.mutate({ activationCode })
    }, [])
}
