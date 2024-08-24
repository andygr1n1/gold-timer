import type { CodegenConfig } from '@graphql-codegen/cli'

console.log('Endpoint:', process.env.ENDPOINT)
console.log('Admin Secret:', process.env.ADMIN_SECRET)

const config: CodegenConfig = {
    overwrite: true,
    schema: [
        {
            [process.env.ENDPOINT || 'http://localhost:6080/v1/graphql']: {
                // Use fallback for debugging
                headers: {
                    'x-hasura-admin-secret': process.env.ADMIN_SECRET || 'grini', // Use fallback for debugging
                },
            },
        },
    ],
    documents: 'src/**/*.{js,jsx,ts,tsx}',
    generates: {
        'src/gql/': {
            preset: 'client',
            plugins: ['typescript', 'typescript-operations', 'typescript-urql'],
        },
        './graphql.schema.json': {
            plugins: ['introspection'],
        },
    },
    hooks: {
        afterAllFileWrite: ['prettier --write'],
    },
}

export default config
