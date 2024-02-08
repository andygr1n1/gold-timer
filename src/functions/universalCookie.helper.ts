import { add } from 'date-fns'
import Cookies from 'universal-cookie'

const cookies = new Cookies()

export const getUserId = (): string => cookies.get('user') || ''
export const getUserCoins = (): number =>
    window.queryClient.getQueryData<unknown, string[], { coins?: number }>(['useFetchUserCoinsInfo'])?.coins || 0

export const setRememberUserCookie = (userId: string, remember_me: boolean) =>
    cookies.set('user', userId, {
        path: '/',
        expires: add(new Date(Date.now()), remember_me ? { days: 60 } : { minutes: 30 }),
    })

export const removeUserCookie = () => cookies.remove('user')
