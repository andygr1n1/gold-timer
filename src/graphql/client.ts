import { GraphQLClient } from 'graphql-request'
import { createClient } from 'gold-timer-genql/lib/generated'

export const generateClient = (): GraphQLClient => {
    const endpoint = import.meta.env.VITE_CLIENT_ENDPOINT
    const client = new GraphQLClient(endpoint, {
        headers: { 'x-hasura-admin-secret': import.meta.env.VITE_X_HASURA_ADMIN_SECRET },
    })

    return client
}

export const generateTSClient = (options: { batch: boolean } = { batch: false }) =>
    createClient({
        url: import.meta.env.VITE_CLIENT_ENDPOINT,
        headers: { 'x-hasura-admin-secret': import.meta.env.VITE_X_HASURA_ADMIN_SECRET },

        ...options,
    })
