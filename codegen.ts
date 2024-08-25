import { config as loadEnv } from 'dotenv'
import type { CodegenConfig } from '@graphql-codegen/cli'
loadEnv()

const config: CodegenConfig = {
    overwrite: true,
    schema: [
        {
            [process.env.VITE_CLIENT_ENDPOINT as string]: {
                headers: {
                    'x-hasura-admin-secret': process.env.VITE_ADMIN_SECRET as string,
                },
            },
        },
    ],
    documents: 'src/**/*.{js,jsx,ts,tsx}',
    generates: {
        '.gql/': {
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
