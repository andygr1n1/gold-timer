import { useUser$ } from '@/services/user-store/userUser.store'
import { useGoogleLogin } from '@react-oauth/google'
import { server_googleLogin } from '../service/server_googleLogin'
import { setAccessIdInCookie, setSessionJWTInCookie } from '@/helpers/universalCookie'
import { parseJwt } from '@/helpers/parseJwt'
import { processError } from '@/helpers/processMessage'

export const useGoogleKzenLogin = () => {
    const { selectUser } = useUser$()
    const googleLogin = useGoogleLogin({
        onSuccess: async (credentialResponse) => {
            const res = await server_googleLogin({ formData: { accessJWT: credentialResponse.access_token } })
            const jwtToken = res?.accessJWT
            const sessionJWT = res?.sessionJWT
            jwtToken && setAccessIdInCookie(jwtToken)
            const data = parseJwt(jwtToken)
            setAccessIdInCookie(jwtToken)
            setSessionJWTInCookie(sessionJWT)
            selectUser({
                user: { id: data?.id, role: data?.role },
            })
        },
        onError: () => {
            processError('Google login failed')
        },
    })

    return { googleLogin }
}
