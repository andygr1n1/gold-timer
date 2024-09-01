import { resolveError, tryCatchRequest } from '@/helpers/tryCatchRequest'
import { type IGoalSlide, goalSlideSchema } from './types'
import { generateTSClient } from '@/graphql/client'

export const mutation_insertGoalSlide = async (props: {
    imgPath: string
    title: string
}): Promise<IGoalSlide | undefined> => {
    const { title, imgPath } = props

    return await tryCatchRequest<Promise<undefined>, IGoalSlide | undefined>(
        async () => {
            const client = await generateTSClient()

            const statusRes = await client
                .mutation({
                    __name: 'mutation_insertGoalSlide',
                    insert_goals_slides_one: {
                        __args: {
                            object: { img_path: imgPath, title },
                        },
                        id: true,
                        img_path: true,
                        active: true,
                        title: true,
                        created_at: true,
                    },
                })
                .then((response) => {
                    const zParse = goalSlideSchema.parse(response.insert_goals_slides_one)
                    return zParse
                })

            return statusRes
        },
        async (e) => await resolveError(e),
    )
}
