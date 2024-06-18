import { debounce } from 'lodash-es'
import { useCallback, useRef } from 'react'

export const useDebouncedEmailSender = (resendEmail: () => void) => {
    const isFirstRequest = useRef(true)

    const debouncedSendEmail = useCallback(
        debounce(() => {
            resendEmail?.()
        }, 60000),
        [resendEmail],
    )

    const sendEmail = useCallback(() => {
        if (isFirstRequest.current) {
            resendEmail?.()
            isFirstRequest.current = false
        } else {
            debouncedSendEmail()
        }
    }, [debouncedSendEmail, resendEmail])

    return sendEmail
}
