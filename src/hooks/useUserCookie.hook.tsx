import { getUserCookie } from '@/functions/universalCookie.helper'
import { loginAtom } from '@/stores/login.store'
import { useAtom } from 'jotai'

export const useUserCookie = () => {
    const [{ user_id }, setLogin] = useAtom(loginAtom)
    const getUserIdCookie = getUserCookie()
    if (getUserIdCookie && !user_id) setLogin((prev) => ({ ...prev, user_id: getUserIdCookie }))
}
