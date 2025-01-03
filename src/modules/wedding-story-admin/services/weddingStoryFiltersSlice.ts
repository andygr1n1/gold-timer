import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import type { IGuestsFilters$ } from './types'

const initialState = (): IGuestsFilters$ => {
    const savedState = localStorage.getItem('weddingStoryFilters')
    const state: IGuestsFilters$ = savedState
        ? JSON.parse(savedState)
        : {
              textValue: '',
              registered: false,
              notRegistered: false,
              checkedIn: false,
              notCheckedIn: false,
              hidden: false,
              visible: false,
              tablesView: false,
          }

    return state
}

export const weddingStoryFiltersSlice = createSlice({
    name: 'weddingStoryFilters',
    initialState: initialState(),
    reducers: {
        updateField: (
            state,
            action: PayloadAction<{
                field: keyof IGuestsFilters$
                value: (typeof state)[keyof IGuestsFilters$]
            }>,
        ) => {
            const { field, value } = action.payload
            state[field] = value as never
        },
    },
    selectors: {
        selectTextValue: (state) => state.textValue,
        selectRegistered: (state) => state.registered,
        selectNotRegistered: (state) => state.notRegistered,
        selectCheckedIn: (state) => state.checkedIn,
        selectNotCheckedIn: (state) => state.notCheckedIn,
        selectHidden: (state) => state.hidden,
        selectVisible: (state) => state.visible,
        selectTablesView: (state) => state.tablesView,
        selectGuestsFilters: (state) => state,
    },
})

export const weddingStoryFiltersReducer = weddingStoryFiltersSlice.reducer

export const {
    selectTablesView,
    selectTextValue,
    selectRegistered,
    selectNotRegistered,
    selectCheckedIn,
    selectNotCheckedIn,
    selectHidden,
    selectVisible,
    selectGuestsFilters,
} = weddingStoryFiltersSlice.selectors

export const { updateField } = weddingStoryFiltersSlice.actions
