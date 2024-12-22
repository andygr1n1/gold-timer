import { apiSlice } from '@/modules/goals-slides/service/apiGoalsSlidesSlice'
import { configureStore } from '@reduxjs/toolkit'
import { listenerMiddleware } from './middleware/listenerMiddleware'
import { setupListeners } from '@reduxjs/toolkit/query'
// import counterReducer from '@/modules/counter/store/counterSlice'

export const root$ = configureStore({
    reducer: {
        // appInventoryList: appInventoryListReducer,
        [apiSlice.reducerPath]: apiSlice.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().prepend(listenerMiddleware.middleware).concat(apiSlice.middleware),
})

setupListeners(root$.dispatch)
