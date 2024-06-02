import { useVerifyActivationCode } from '../service/useVerifyActivationCode.service'
import { useEffect } from 'react'

export const useActivation = () => {
    const { verifyActivationCode } = useVerifyActivationCode()

    useEffect(() => {
        verifyActivationCode()
    }, [])
}
