import { generateTSClient } from '../../../graphql/client'
import { resolveError, tryCatchRequest } from '@/helpers/tryCatchRequest'
import { type IGoalSlide, goalSlideSchema } from './types'

export const mutation_deleteGoalSlide = async (props: { id: string }) => {
    const { id } = props

    return await tryCatchRequest<Promise<undefined>, IGoalSlide | undefined>(
        async () => {
            const client = await generateTSClient()

            const statusRes = await client
                .mutation({
                    __name: 'mutation_deleteGoalSlide',
                    delete_goals_slides_by_pk: {
                        __args: {
                            id,
                        },
                        id: true,
                        img_path: true,
                        active: true,
                        title: true,
                        created_at: true,
                    },
                })
                .then((response) => {
                    const zParse = goalSlideSchema.parse(response.delete_goals_slides_by_pk)
                    return zParse
                })

            return statusRes
        },
        async (e) => await resolveError(e),
    )
}
