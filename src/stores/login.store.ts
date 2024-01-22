import { atom } from 'jotai'

interface ILoginAtom {
    user_id: string
    remember?: boolean
}

export const loginAtom = atom<ILoginAtom>({ user_id: '', remember: false })

export const setUserId = atom<null, [update: ILoginAtom], void>(null, (get, set, update) =>
    set(loginAtom, (prev) => ({ ...prev, update })),
)
