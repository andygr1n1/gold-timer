import { createApi } from '@reduxjs/toolkit/query/react'

import { graphqlBaseQuery as baseQuery } from '@/api/graphqlBaseQuery'
import type { INotepad } from './types'
import { queryNotepad } from './graphql/query_fetchNotepad'
import { mutationUpsertNotepad } from './graphql/mutation_upsertNotepad'

export const apiNotepadSlice = createApi({
    reducerPath: 'api/notepad',
    baseQuery,
    refetchOnReconnect: true,
    tagTypes: ['Notepad'],
    endpoints: (builder) => ({
        getNotepad: builder.query<INotepad | undefined, unknown>({
            query: () => ({
                body: queryNotepad(),
            }),
            transformResponse: (response: { notepad: INotepad[] }) => {
                return response.notepad[0]
            },
            providesTags: () => [{ type: 'Notepad' }],
        }),
        updateNotepad: builder.mutation<INotepad, { object: INotepad }>({
            query: (variables) => ({
                body: mutationUpsertNotepad(),
                variables,
            }),
            transformResponse: (response: { insert_notepad_one: INotepad }) => {
                return response.insert_notepad_one
            },
        }),
    }),
})

export const { useGetNotepadQuery, useUpdateNotepadMutation } = apiNotepadSlice
