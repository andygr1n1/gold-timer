import type { Action, ThunkAction } from '@reduxjs/toolkit'
import type { root$ } from './root.store'

export type IRootStore = typeof root$
export type IRootState = ReturnType<IRootStore['getState']>
export type IRootDispatch = IRootStore['dispatch']
export type IRootThunk<ThunkReturnType = void> = ThunkAction<ThunkReturnType, IRootState, unknown, Action>
