import { IHero } from '../service'
import { IEditProfile$ } from '../stores/types'
import { proxyConvert } from '@/helpers/proxyConvert'
import bcrypt from 'bcryptjs'

export const buildProfileDataUpdate = (store: IEditProfile$): IHero => {
    const data = proxyConvert(store)
    data.newPassword && (data.password = bcrypt.hashSync(data.newPassword, 10))
    delete data.newPassword
    delete data.repeatPassword
    return data
}
