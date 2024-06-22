import { resolveData } from '@/helpers/tryCatchRequest'
import { processError } from '@/helpers/processMessage'
import { IHero } from '../types'
import { generateTSClient } from '@/graphql/client'
import { getUserId } from '@/helpers/getUserData'
import { optimizeProfileData } from '../../helpers/optimizeProfileData'

export const mutation_updateProfile = async (data: IHero): Promise<IHero | null> => {
    const client = await generateTSClient()
    return await resolveData<null, IHero | null>(
        () =>
            client
                .mutation({
                    __name: 'mutation_updateProfile',
                    update_heroes_by_pk: {
                        __args: {
                            pk_columns: { id: getUserId() },
                            _set: { ...data },
                        },
                        id: true,
                    },
                })
                .then((res) => {
                    return optimizeProfileData(res?.update_heroes_by_pk)
                }),
        (e) => {
            processError(`mutation_updateProfile: ${e}`)
            return null
        },
    )
}
