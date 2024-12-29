import { apiGoalsSlidesSlice } from '@/modules/goals-slides/service/apiGoalsSlidesSlice'
import { configureStore } from '@reduxjs/toolkit'
import { listenerMiddleware } from './middleware/listenerMiddleware'
import { setupListeners } from '@reduxjs/toolkit/query'
import { apiNotepadSlice } from '@/modules/notepad/service/apiNotepadSlice'
// import counterReducer from '@/modules/counter/store/counterSlice'

export const root$ = configureStore({
    reducer: {
        // appInventoryList: appInventoryListReducer,
        [apiGoalsSlidesSlice.reducerPath]: apiGoalsSlidesSlice.reducer,
        [apiNotepadSlice.reducerPath]: apiNotepadSlice.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().prepend(listenerMiddleware.middleware).concat(apiGoalsSlidesSlice.middleware, apiNotepadSlice.middleware),
})

setupListeners(root$.dispatch)
