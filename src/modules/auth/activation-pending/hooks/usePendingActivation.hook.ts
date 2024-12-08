import { useEffect } from 'react'
import { getParam_Email } from '@/helpers/urlSearchParams'
import { useNavigate } from 'react-router-dom'
import { useResendActivationLink } from '../service/useResendActivationLink'
import { useRoot$ } from '@/modules/app/mst/StoreProvider'

export const usePendingActivation = () => {
    const navigate = useNavigate()
    const email = getParam_Email()
    const { fetchGuestData } = useRoot$()
    const { resendActivationLink } = useResendActivationLink({ email })

    useEffect(() => {
        fetchGuestData({ navigate })
    }, [])

    return { resendActivationLink }
}
