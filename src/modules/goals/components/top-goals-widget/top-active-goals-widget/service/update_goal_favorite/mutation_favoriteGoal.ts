import { fetchData } from '@/functions/fetchData'
import { generateTSClient } from '@/graphql/client'
import { processError } from '@/functions/processMessage'

interface IFavoriteGoal {
    id: string
    is_favorite: boolean
}

export const mutation_favoriteGoal = async (goal_id: string, is_favorite: boolean): Promise<IFavoriteGoal | null> => {
    const client = generateTSClient()

    return await fetchData<null, IFavoriteGoal | null>(
        () =>
            client
                .mutation({
                    __name: 'mutation_favoriteGoal',
                    update_goals_by_pk: {
                        __args: {
                            pk_columns: { id: goal_id },
                            _set: { is_favorite },
                        },
                        id: true,
                        is_favorite: true,
                    },
                })
                .then((res) => {
                    return res.update_goals_by_pk
                }),
        (e) => {
            processError(`mutation_favoriteGoal: ${e}`)
            return null
        },
    )
}
