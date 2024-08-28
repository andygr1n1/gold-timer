import { useEffect } from 'react'
import { useUserData } from '../service/useUserData.service'
import { getParam_Email } from '@/helpers/urlSearchParams'
import { type IUserDataService } from '../service/types'
import { useNavigate } from 'react-router-dom'
import { APP_ROUTES_ENUM } from '@/services/enums'
import { processError } from '@/helpers/processMessage'
import { useResendActivationLink } from '../service/useResendActivationLink.service'

export const usePendingActivation = (): IUserDataService => {
    const navigate = useNavigate()
    const email = getParam_Email()
    const { isLoading, user, error } = useUserData({ email })
    const { resendActivationLink } = useResendActivationLink({ email })

    /* *** */
    useEffect(() => {
        const isHero = user?.role !== 'guest'
        if (!user && !isLoading && !error) {
            navigate(`/${APP_ROUTES_ENUM.REGISTER}`, { replace: true })
            processError(
                `We don't recognize you. May be your activation link is expired. Please restart the registration process. Thank you!`,
            )
        }

        if (isHero && !isLoading) {
            navigate(`/${APP_ROUTES_ENUM.LOGIN}`, { replace: true })
        }
    }, [user?.role, isLoading])

    if (error) {
        processError(`Please try again later`)
    }

    return { isLoading, user, resendActivationLink, error }
}
