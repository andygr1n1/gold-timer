import { add } from 'date-fns'
import Cookies from 'universal-cookie'
import { jwtDecode } from 'jwt-decode'

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

export const setAccessIdInCookie = (id?: string) => {
    if (!id) return

    const cookies = new Cookies()
    // Decode the JWT token to get the expiration time
    const decodedToken = jwtDecode(id)
    if (!decodedToken.exp) return

    const exp = decodedToken.exp * 1000
    const expires = new Date(exp)

    cookies.set('accessToken', id, { path: '/', expires })
    console.log('Token set in cookie with expiration time:', expires)
}
