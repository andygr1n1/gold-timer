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
            console.log('sessionJWT', sessionJWT)
            jwtToken && setAccessIdInCookie(jwtToken)
            const data = parseJwt(jwtToken)
            setAccessIdInCookie(res?.accessJWT)
            setSessionJWTInCookie(sessionJWT)
            selectUser({
                user: { userId: data?.id, role: data?.role, isLoading: false },
            })
        },
        onError: () => {
            processError('Google login failed')
        },
    })

    return { googleLogin }
}
