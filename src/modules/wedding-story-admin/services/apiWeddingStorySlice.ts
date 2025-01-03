import { createApi } from '@reduxjs/toolkit/query/react'

import { graphqlBaseQuery as baseQuery } from '@/api/graphqlBaseQuery'
import type { IWeddingGroup, IWeddingGuest } from './types'
import { queryWeddingGroups, queryWeddingGroupsByFilter } from './graphql/query_weddingGroups'
import type { Variables } from 'graphql-request'
import { mutationInsertWeddingGroup, mutationInsertWeddingGuests } from './graphql/mutation_createInvitation'
import { mutationDeleteWeddingGroup } from './graphql/mutation_deleteWeddingGroup'
import { mutationHideWeddingGroup } from './graphql/mutation_hideWeddingGroup'
import { mutationEditWeddingGroup, mutationEditWeddingGuest } from './graphql/mutation_editWeddingGroup'

export const apiWeddingStorySlice = createApi({
    reducerPath: 'api/wedding_story',
    baseQuery,
    refetchOnReconnect: true,
    tagTypes: ['wedding_story'],
    endpoints: (builder) => ({
        getAllWeddingGroups: builder.query<IWeddingGroup[], void>({
            query: () => ({
                body: queryWeddingGroups(),
            }),
            transformResponse: (response: { wedding_groups: IWeddingGroup[] }) => {
                return response.wedding_groups
            },
            providesTags: () => [{ type: 'wedding_story' }],
        }),
        getWeddingGroupsByFilter: builder.query<IWeddingGroup[], Variables>({
            query: (variables) => ({
                body: queryWeddingGroupsByFilter(),
                variables,
            }),
            transformResponse: (response: { wedding_groups: IWeddingGroup[] }) => {
                return response.wedding_groups
            },
            providesTags: () => [{ type: 'wedding_story' }],
        }),
        insertWeddingGroup: builder.mutation<
            IWeddingGroup,
            { object: { id: string; name: string; booking_number: string } }
        >({
            query: (variables) => ({
                body: mutationInsertWeddingGroup(),
                variables,
            }),
        }),
        insertWeddingGuests: builder.mutation<
            IWeddingGuest,
            {
                objects: {
                    group_id: string
                    first_name: string
                    last_name?: string
                    primary: boolean
                }[]
            }
        >({
            query: (variables) => ({
                body: mutationInsertWeddingGuests(),
                variables,
            }),
            invalidatesTags: ['wedding_story'],
        }),
        deleteWeddingGroup: builder.mutation<IWeddingGroup, { groupId: string }>({
            query: (variables) => ({
                body: mutationDeleteWeddingGroup(),
                variables,
            }),
            invalidatesTags: ['wedding_story'],
        }),
        hideWeddingGroup: builder.mutation<IWeddingGroup, { groupId: string; hide: boolean }>({
            query: (variables) => ({
                body: mutationHideWeddingGroup(),
                variables,
            }),
            invalidatesTags: ['wedding_story'],
        }),
        editWeddingGroup: builder.mutation<IWeddingGroup, { groupId: string; name: string }>({
            query: (variables) => ({
                body: mutationEditWeddingGroup(),
                variables,
            }),
            invalidatesTags: ['wedding_story'],
        }),
        editWeddingGuest: builder.mutation<IWeddingGuest, { guestId: string; table: number | null }>({
            query: (variables) => ({
                body: mutationEditWeddingGuest(),
                variables,
            }),
        }),
    }),
})

export const {
    useGetAllWeddingGroupsQuery,
    useGetWeddingGroupsByFilterQuery,
    useInsertWeddingGroupMutation,
    useInsertWeddingGuestsMutation,
    useDeleteWeddingGroupMutation,
    useHideWeddingGroupMutation,
    useEditWeddingGroupMutation,
    useEditWeddingGuestMutation,
} = apiWeddingStorySlice
