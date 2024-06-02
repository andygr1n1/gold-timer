import { useEffect } from 'react'
import { useUserData } from '../service/useUserData.service'
import { getParam_Email } from '@/functions/urlSearchParams'
import { IUserDataService } from '../service/types'
import { useNavigate } from 'react-router-dom'
import { APP_ROUTES_ENUM } from '@/helpers/globalEnums'
import { processError } from '@/functions/processMessage'
import { useResendActivationLink } from '../service/useResendActivationLink.service'

export const usePendingActivation = (): IUserDataService => {
    const navigate = useNavigate()
    const email = getParam_Email()
    const { isLoading, user, error } = useUserData({ email })
    const { resendActivationLink } = useResendActivationLink({ email })

    /* *** */
    useEffect(() => {
        if (!user && !isLoading && !error) {
            navigate(`/${APP_ROUTES_ENUM.REGISTER}`, { replace: true })
            processError(`Your activation link is expired. Please restart the registration process. Thank you!`)
        }

        if (user?.activated && !isLoading) {
            navigate(`/${APP_ROUTES_ENUM.LOGIN}`, { replace: true })
        }
    }, [user?.activated])

    if (error) {
        processError(`Please try again later`)
    }

    return { isLoading, user, resendActivationLink, error }
}
