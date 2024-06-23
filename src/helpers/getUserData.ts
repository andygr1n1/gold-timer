import { parseJwt } from '@/helpers/parseJwt'
import Cookies from 'universal-cookie'

export const getUserId = (): string => {
    const cookies = new Cookies()
    const jwtToken = cookies.get('accessToken') || ''
    // if token is unvailable to generate new one
    return parseJwt(jwtToken)?.id || ''
}
export const getUserCoins = (): number =>
    window.queryClient?.getQueryData<unknown, string[], { coins?: number }>(['useFetchUserCoinsInfo'])?.coins || 0
