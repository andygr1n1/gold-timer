import { parseJwt } from '@/helpers/parseJwt'
import Cookies from 'universal-cookie'

/**
 * @deprecated Use `user store`
 */
export const getUserId = (): string => {
    const cookies = new Cookies()
    const jwtToken = cookies.get('accessJWT') || ''
    return parseJwt(jwtToken)?.id || ''
}
