import { useUserStore } from '@/services/user-store/useUserStore.service'
import { useGoogleLogin } from '@react-oauth/google'
import { server_googleLogin } from '../service/server_googleLogin'
import { setAccessIdInCookie } from '@/helpers/universalCookie'
import { parseJwt } from '@/helpers/parseJwt'
import { processError } from '@/helpers/processMessage'

export const useGoogleKzenLogin = () => {
    const { selectUser } = useUserStore()
    const googleLogin = useGoogleLogin({
        onSuccess: async (credentialResponse) => {
            const res = await server_googleLogin({ formData: { accessId: credentialResponse.access_token } })
            console.log('res', res)
            const jwtToken = res?.accessId
            jwtToken && setAccessIdInCookie(jwtToken)
            const data = parseJwt(jwtToken)
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
