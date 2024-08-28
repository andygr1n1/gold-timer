import { useMutation } from '@tanstack/react-query'
import { type INewStorySchema } from '../types'
import { cast } from '@/helpers'
import { SERVER_ROUTES } from '@/services/enums'
import { uploadNewImageToServer } from '@/services/image/image.service'
import { useUser$ } from '@/services/user-store/userUser.store'
import { useInvalidateStories } from '../../components/story-editor-dialog/hooks/useInvalidateStories'
import { mutation_insertStory } from './mutation_insertStory'

export const useInsertStory = () => {
    const { userId } = useUser$()
    const { onSuccess } = useInvalidateStories()

    const mutation = useMutation({
        mutationFn: async ({ values }: { values: INewStorySchema }) => {
            const img_path = values.img_src
                ? await uploadNewImageToServer({
                      img: cast(values.img_src),
                      route: SERVER_ROUTES.STORY_IMAGE_UPLOAD,
                      userId,
                  })
                : null
            return mutation_insertStory({ values: { ...values, img_path } })
        },
        onSuccess,
    })

    const insertStory = ({
        values,
        onSuccess,
        onSettled,
    }: {
        values: INewStorySchema
        onSuccess?: () => void
        onSettled?: () => void
    }) => {
        mutation.mutate({ values }, { onSuccess, onSettled })
    }

    return { insertStory }
}
