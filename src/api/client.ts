import { GraphQLClient } from 'graphql-request'
import { getAccessIdFromCookie, jwtVerify, setAccessIdInCookie, setSessionJWTInCookie } from '@/helpers/universalCookie'
import { server_getSessionCredentials } from '@/services/server_getSessionCredentials'

export const generateClient = async (): Promise<GraphQLClient> => {
    const endpoint = import.meta.env['VITE_CLIENT_ENDPOINT']

    const { accessJwt } = await getAccessJwt()

    const Authorization = `Bearer ${accessJwt}`

    return new GraphQLClient(endpoint, {
        headers: { Authorization },
    })
}

const getAccessJwt = async () => {
    let accessJwt: string | null | undefined = getAccessIdFromCookie()

    const verify = jwtVerify(accessJwt)

    if (!verify || !accessJwt) {
        const res = await server_getSessionCredentials()
        accessJwt = res?.serverCredentials?.accessJWT
        accessJwt && setAccessIdInCookie(accessJwt)
        setSessionJWTInCookie(res?.serverCredentials?.sessionJWT)
    }

    return { accessJwt }
}
