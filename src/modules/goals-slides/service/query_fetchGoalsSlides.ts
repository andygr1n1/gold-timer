import { generateTSClient } from '../../../graphql/client'
import { resolveError, tryCatchRequest } from '@/helpers/tryCatchRequest'
import { type IGoalSlideSchema, goalsSlidesResponseSchema } from './types'

export const query_fetchGoalsSlides = async ({
    ownerId,
}: {
    ownerId: string
}): Promise<IGoalSlideSchema[] | undefined> => {
    return await tryCatchRequest<Promise<undefined>, IGoalSlideSchema[] | undefined>(
        async () => {
            const client = await generateTSClient()
            return await client
                .query({
                    __name: 'query_fetchGoalsSlides',
                    goals_slides: {
                        __args: { where: { owner_id: { _eq: ownerId } } },
                        id: true,
                        img_path: true,
                        active: true,
                        title: true,
                        created_at: true,
                    },
                })
                .then((response) => {
                    const zParse = goalsSlidesResponseSchema.parse(response)
                    return zParse.goals_slides
                })
        },
        async (e) => await resolveError(e),
    )
}
