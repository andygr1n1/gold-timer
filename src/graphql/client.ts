import { GraphQLClient } from 'graphql-request'
import { getAccessIdFromCookie, jwtVerify, setAccessIdInCookie, setSessionJWTInCookie } from '@/helpers/universalCookie'
import { server_getSessionCredentials } from '@/services/server_getSessionCredentials'
import { createClient } from 'gold-timer-genql/lib/generated'

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
        window.genqlClient = null
        const res = await server_getSessionCredentials()
        accessJwt = res?.serverCredentials?.accessJWT
        accessJwt && setAccessIdInCookie(accessJwt)
        setSessionJWTInCookie(res?.serverCredentials?.sessionJWT)
    }

    return { accessJwt }
}


export const generateTSClient = async (opts?: { new: boolean }) => {
    const { accessJwt } = await getAccessJwt()
    const Authorization = `Bearer ${accessJwt}`

    let client = opts?.new ? null : window.genqlClient

    if (!client) {
        client = createClient({
            url: import.meta.env['VITE_CLIENT_ENDPOINT'],
            headers: { Authorization },
            batch: true,
        })
        window.genqlClient = client
    }

    return client
}