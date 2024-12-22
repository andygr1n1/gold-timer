import { createApi } from '@reduxjs/toolkit/query/react'

import type { IGoalSlide } from '@/modules/goals-slides/service/types'
import { graphqlBaseQuery as baseQuery } from '../../../api/graphqlBaseQuery'
import type { Variables } from 'graphql-request'
import { queryGoalsSlides } from './graphql/query_fetchGoalsSlides'
import { mutationToggleGoalSlideVisibility } from './graphql/mutation_updateGoalSlideIsActive'

export const apiSlice = createApi({
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
    }),
})

export const { useGetGoalsSlidesQuery, useToggleGoalSlideVisibilityMutation } = apiSlice
