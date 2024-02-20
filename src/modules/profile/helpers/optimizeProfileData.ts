import { heroes } from 'gold-timer-genql/lib/generated'
import { IHero } from '../service'

export const optimizeProfileData = (data?: Partial<heroes> | undefined | null): IHero => {
    const hero = {
        avatar: data?.avatar || '',
        birthday: data?.birthday || '',
        email: data?.email || '-',
        name: data?.name || '-',
        password: data?.password || '',
        phone: data?.phone || '-',
    }

    return hero
}
