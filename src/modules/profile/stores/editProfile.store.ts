import { atom } from 'jotai'

import { isDev } from '@/helpers/isUnderDevelopment.helper'
import { focusAtom } from 'jotai-optics'
import { IEditProfile$ } from './types'

export const editProfile$ = atom<IEditProfile$ | undefined>(undefined)
isDev() && (editProfile$.debugLabel = 'editProfile$')

// *
// actions
export const openProfileEdit = atom(null, (/* get, set */) => {
    // set(editProfile$, () => window.queryClient?.getQueryData<unknown, string[], IHero>(KEY_FetchProfileData()))
})

// *
// optics
export const editProfile$_Name = focusAtom(editProfile$, (optic) => {
    return optic.optional().prop('name')
})

export const editProfile$_Phone = focusAtom(editProfile$, (optic) => {
    return optic.optional().prop('phone')
})

export const editProfile$_Birthday = focusAtom(editProfile$, (optic) => {
    return optic.optional().prop('birthday')
})
export const editProfile$_Password = focusAtom(editProfile$, (optic) => {
    return optic.optional().prop('password')
})
export const editProfile$_NewPassword = focusAtom(editProfile$, (optic) => {
    return optic.optional().prop('newPassword')
})
export const editProfile$_RepeatPassword = focusAtom(editProfile$, (optic) => {
    return optic.optional().prop('repeatPassword')
})

// *
// derived
export const newPasswordIsValid = atom((get) => get(editProfile$_NewPassword) === get(editProfile$_RepeatPassword))
export const passwordIsValid = atom((get) => !!get(newPasswordIsValid) && get(editProfile$_Password)?.length)

export const enabledProfileDataUpdate = atom((get) => !!get(editProfile$_Name)?.length && get(passwordIsValid))
