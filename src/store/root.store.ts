import { apiGoalsSlidesSlice } from '@/modules/goals-slides/service/apiGoalsSlidesSlice'
import { configureStore } from '@reduxjs/toolkit'
import { listenerMiddleware } from './middleware/listenerMiddleware'
import { setupListeners } from '@reduxjs/toolkit/query'
import { apiNotepadSlice } from '@/modules/notepad/service/apiNotepadSlice'
import { apiWeddingStorySlice } from '@/modules/wedding-story-admin/services/apiWeddingStorySlice'
// import counterReducer from '@/modules/counter/store/counterSlice'

export const root$ = configureStore({
    reducer: {
        // appInventoryList: appInventoryListReducer,
        [apiGoalsSlidesSlice.reducerPath]: apiGoalsSlidesSlice.reducer,
        [apiNotepadSlice.reducerPath]: apiNotepadSlice.reducer,
        [apiWeddingStorySlice.reducerPath]: apiWeddingStorySlice.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().prepend(listenerMiddleware.middleware).concat(apiGoalsSlidesSlice.middleware, apiNotepadSlice.middleware, apiWeddingStorySlice.middleware),
})

setupListeners(root$.dispatch)
