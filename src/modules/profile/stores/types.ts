import { IHero } from '../service'

export type IEditProfile$ = IHero & { newPassword?: string; repeatPassword?: string }
