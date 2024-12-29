import { useDispatch, useSelector } from 'react-redux'
import type { IRootDispatch, IRootState } from './types'

export const useAppDispatch = useDispatch.withTypes<IRootDispatch>()
export const useAppSelector = useSelector.withTypes<IRootState>()
