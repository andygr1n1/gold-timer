import { add } from 'date-fns'
import Cookies from 'universal-cookie'

export const setRememberUserCookie = (userId: string, remember_me: boolean) => {
    const cookies = new Cookies()
    return cookies.set('user', userId, {
        path: '/',
        expires: add(new Date(Date.now()), remember_me ? { days: 60 } : { minutes: 30 }),
    })
}

export const removeUserCookie = () => {
    const cookies = new Cookies()
    return cookies.remove('user')
}
