import { add } from 'date-fns'
import Cookies from 'universal-cookie'

const cookies = new Cookies()

export const getUserCookie = (): string | null => cookies.get('user')

export const setRememberUserCookie = (userId: string) =>
    cookies.set('user', userId, { path: '/', expires: add(new Date(Date.now()), { days: 60 }) })

export const removeUserCookie = () => cookies.remove('user')
