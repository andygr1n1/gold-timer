import { processError } from '../../../../helpers/processMessage'
import { resolveData } from '@/helpers/tryCatchRequest'
import { generateTSClient } from '@/graphql/client'
import { IHero } from '../types'
import { getUserId } from '@/helpers/getUserData'
import { optimizeProfileData } from '../../helpers/optimizeProfileData'

export const query_fetchProfileData = async (): Promise<IHero> => {
    const client = generateTSClient()

    return await resolveData<IHero, IHero | IHero>(
        () =>
            client
                .query({
                    __name: 'query_fetchProfileData',
                    heroes_by_pk: {
                        __args: { id: getUserId() },
                        id: true,
                        avatar: true,
                        birthday: true,
                        email: true,
                        name: true,
                        password: true,
                        phone: true,
                    },
                })
                .then((res) => {
                    return optimizeProfileData(res.heroes_by_pk)
                }),
        (e) => {
            processError(`query_fetchProfileData: ${e}`)
            return optimizeProfileData(null)
        },
    )
}
