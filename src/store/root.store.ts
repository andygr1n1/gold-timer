import { apiGoalsSlidesSlice } from '@/modules/goals-slides/service/apiGoalsSlidesSlice'
import { configureStore } from '@reduxjs/toolkit'
import { listenerMiddleware } from './middleware/listenerMiddleware'
import { setupListeners } from '@reduxjs/toolkit/query'
import { apiNotepadSlice } from '@/modules/notepad/service/apiNotepadSlice'
import { apiWeddingStorySlice } from '@/modules/wedding-story-admin/services/apiWeddingStorySlice'
import { weddingStoryFiltersReducer } from '@/modules/wedding-story-admin/services/weddingStoryFiltersSlice'

export const root$ = configureStore({
    reducer: {
        [apiGoalsSlidesSlice.reducerPath]: apiGoalsSlidesSlice.reducer,
        [apiNotepadSlice.reducerPath]: apiNotepadSlice.reducer,
        /*  */
        [apiWeddingStorySlice.reducerPath]: apiWeddingStorySlice.reducer,
        weddingStoryFilters: weddingStoryFiltersReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware()
            .prepend(listenerMiddleware.middleware)
            .concat(apiGoalsSlidesSlice.middleware, apiNotepadSlice.middleware, apiWeddingStorySlice.middleware),
})

setupListeners(root$.dispatch)

root$.subscribe(() => {
    localStorage.setItem('weddingStoryFilters', JSON.stringify(root$.getState().weddingStoryFilters))
})
