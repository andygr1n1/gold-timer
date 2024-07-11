import { GraphQLClient } from 'graphql-request'
import { createClient } from 'gold-timer-genql/lib/generated'
import { getAccessIdFromCookie, jwtVerify, setAccessIdInCookie } from '@/helpers/universalCookie'
import { server_getSessionCredentials } from '@/services/server_getSessionCredentials'

export const generateClient = (): GraphQLClient => {
    const endpoint = import.meta.env.VITE_CLIENT_ENDPOINT
    const client = new GraphQLClient(endpoint, {
        headers: { 'x-hasura-admin-secret': import.meta.env.VITE_X_HASURA_ADMIN_SECRET },
    })

    return client
}

export const generateTSClient = async () => {
    const { accessJwt } = await getAccessJwt()
    const Authorization = `Bearer ${accessJwt}`

    let client = window.genqlClient
    if (!client) {
        client = createClient({
            url: import.meta.env.VITE_CLIENT_ENDPOINT,
            headers: { Authorization },
            batch: true,
        })
        window.genqlClient = client
    }

    return client
}

const getAccessJwt = async () => {
    let accessJwt = getAccessIdFromCookie()
    const verify = jwtVerify(accessJwt)
    if (!verify || !accessJwt) {
        window.genqlClient = null
        accessJwt = await server_getSessionCredentials()
        accessJwt && setAccessIdInCookie(accessJwt)
    }

    return { accessJwt }
}
