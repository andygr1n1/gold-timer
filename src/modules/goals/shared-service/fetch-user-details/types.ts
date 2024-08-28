import { type IUserSchema } from '@/services/types'

export const KEY_FetchUserDetails = (userId: string) => ['KEY_FetchUserDetails', userId]

export type IQueryUserDetails = {
    user: IUserSchema
    ritualPower: number
}

export type IFetchUserDetails = {
    isLoading: boolean
    user?: IUserSchema
    ritualPower: number
    coins: number
}
