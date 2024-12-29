import { createListenerMiddleware, addListener } from '@reduxjs/toolkit'
import type { IRootDispatch, IRootState } from '../types'

export const listenerMiddleware = createListenerMiddleware()

export const startAppListening = listenerMiddleware.startListening.withTypes<IRootState, IRootDispatch>()
export type AppStartListening = typeof startAppListening

export const addAppListener = addListener.withTypes<IRootState, IRootDispatch>()
export type AppAddListener = typeof addAppListener
