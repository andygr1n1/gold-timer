import Cookies from 'universal-cookie'

export const getUserId = (): string => {
    const cookies = new Cookies()
    return cookies.get('user') || ''
}
export const getUserCoins = (): number =>
    window.queryClient.getQueryData<unknown, string[], { coins?: number }>(['useFetchUserCoinsInfo'])?.coins || 0
