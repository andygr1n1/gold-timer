import { getUserId } from '@/functions/universalCookie.helper'
import { atom } from 'jotai'
import { atomWithImmer } from 'jotai-immer'

interface ILoginAtom {
    user_id: string
    remember?: boolean
}

export const loginAtom = atomWithImmer<ILoginAtom>({ user_id: getUserId(), remember: false })

export const userId = atom((get) => {
    const store = get(loginAtom)
    return store.user_id
})
