import { GraphQLClient } from 'graphql-request'

export const generateClient = (): GraphQLClient => {
    const endpoint = import.meta.env.VITE_CLIENT_ENDPOINT
    const client = new GraphQLClient(endpoint, {
        headers: { 'x-hasura-admin-secret': import.meta.env.VITE_X_HASURA_ADMIN_SECRET },
    })

    return client
}
