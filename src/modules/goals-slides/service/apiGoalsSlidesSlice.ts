import { createApi } from '@reduxjs/toolkit/query/react'

import type { IGoalSlide } from '@/modules/goals-slides/service/types'
import { graphqlBaseQuery as baseQuery } from '@/api/graphqlBaseQuery'
import type { Variables } from 'graphql-request'
import { queryGoalsSlides } from './graphql/query_fetchGoalsSlides'
import { mutationToggleGoalSlideVisibility } from './graphql/mutation_updateGoalSlideIsActive'
import { mutationDeleteGoalSlide } from './graphql/mutation_deleteGoalSlide'
import { mutationInsertGoalSlide } from './graphql/mutation_insertGoalSlide'

export const apiGoalsSlidesSlice = createApi({
    reducerPath: 'api/goals_slides',
    baseQuery,
    refetchOnReconnect: true,
    tagTypes: ['GoalsSlides'],
    endpoints: (builder) => ({
        getGoalsSlides: builder.query<IGoalSlide[], unknown>({
            query: () => ({
                body: queryGoalsSlides(),
            }),
            transformResponse: (response: { goals_slides: IGoalSlide[] }) => {
                return response.goals_slides
            },
            providesTags: () => [{ type: 'GoalsSlides' }],
        }),
        toggleGoalSlideVisibility: builder.mutation<IGoalSlide, Variables>({
            query: (variables) => ({
                body: mutationToggleGoalSlideVisibility(),
                variables,
            }),
            transformResponse: (response: { update_goals_slides_by_pk: IGoalSlide }) => {
                return response.update_goals_slides_by_pk
            },
            // invalidatesTags: ['GoalsSlides'],
        }),
        deleteGoalSlide: builder.mutation<IGoalSlide, Variables>({
            query: (variables) => ({
                body: mutationDeleteGoalSlide(),
                variables,
            }),
            transformResponse: (response: { delete_goals_slides_by_pk: IGoalSlide }) => {
                return response.delete_goals_slides_by_pk
            },
        }),
        insertGoalSlide: builder.mutation<IGoalSlide, { img_path: string; title: string }>({
            query: (variables) => ({
                body: mutationInsertGoalSlide(),
                variables,
            }),
            transformResponse: (response: { insert_goals_slides_one: IGoalSlide }) => {
                return response.insert_goals_slides_one
            },
        }),
    }),
})

export const {
    useGetGoalsSlidesQuery,
    useToggleGoalSlideVisibilityMutation,
    useDeleteGoalSlideMutation,
    useInsertGoalSlideMutation,
} = apiGoalsSlidesSlice
