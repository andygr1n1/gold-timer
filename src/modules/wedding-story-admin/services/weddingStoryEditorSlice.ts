import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import type { IWeddingStoryEditor$ } from './types'

const initialState = (): IWeddingStoryEditor$ => {
    return { open: false }
}

export const weddingStoryEditorSlice = createSlice({
    name: 'weddingStoryEditor',
    initialState: initialState(),
    reducers: {
        updateField: (
            state,
            action: PayloadAction<{
                field: keyof IWeddingStoryEditor$
                value: (typeof state)[keyof IWeddingStoryEditor$]
            }>,
        ) => {
            const { field, value } = action.payload
            state[field] = value as never
        },
    },
    selectors: {
        selectOpen: (state) => state.open,
    },
})

export const weddingStoryEditorReducer = weddingStoryEditorSlice.reducer

export const { selectOpen } = weddingStoryEditorSlice.selectors

export const { updateField } = weddingStoryEditorSlice.actions
