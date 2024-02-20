import { IHero } from '../service'
import { IEditProfile$ } from '../stores/types'
import { proxyConvert } from '@/functions/proxyConvert'

export const buildProfileDataUpdate = (store: IEditProfile$): IHero => {
    const data = proxyConvert(store)
    data.newPassword && (data.password = data.newPassword)
    delete data.newPassword
    delete data.repeatPassword
    return data
}
