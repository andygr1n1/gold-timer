import { add, addMinutes, getUnixTime } from 'date-fns'
import Cookies from 'universal-cookie'
import { jwtDecode } from 'jwt-decode'

export const setRememberUserCookie = (userId: string, remember_me: boolean) => {
    const cookies = new Cookies()
    return cookies.set('user', userId, {
        path: '/',
        expires: add(new Date(Date.now()), remember_me ? { days: 60 } : { minutes: 30 }),
    })
}

export const setAccessIdInCookie = (id?: string | null) => {
    if (!id) return

    const cookies = new Cookies()
    // Decode the JWT token to get the expiration time
    const decodedToken = jwtDecode(id)
    if (!decodedToken.exp) return

    const exp = decodedToken.exp * 1000
    const expires = new Date(exp)

    cookies.set('accessToken', id, { path: '/', expires })
    console.info('Token set in cookie with expiration time:', expires)
}

export const getAccessIdFromCookie = (): string | null => {
    const cookies = new Cookies()
    return cookies.get('accessToken')
}

export const jwtVerify = (id?: string | null): boolean => {
    if (!id) return false

    const decodedToken = jwtDecode(id)
    if (!decodedToken?.exp) return false
    const currentTime = getUnixTime(new Date())
    const bufferTime = addMinutes(new Date(currentTime * 1000), 2)
    const expirationTime = decodedToken.exp
    if (getUnixTime(bufferTime) >= expirationTime) {
        return false
    }

    return true
}
