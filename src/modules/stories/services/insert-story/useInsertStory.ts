import { useMutation } from '@tanstack/react-query'
import { type INewStorySchema } from '../types'
import { cast } from '@/helpers'
import { SERVER_ROUTES } from '@/services/enums'
import { deleteImageFromServer, uploadNewImageToServer } from '@/services/image/image.service'
import { useUser$ } from '@/modules/app/mst/StoreProvider'
import { useInvalidateStories } from '../../components/story-editor-dialog/hooks/useInvalidateStories'
import { mutation_insertStory } from './mutation_insertStory'
import { mutation_updateStory } from './mutation_updateStory'

export const useInsertStory = () => {
    const { id: userId } = useUser$()
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

    const updateMutation = useMutation({
        mutationFn: async ({ values }: { values: INewStorySchema }) => {
            let imgPath = values.img_path
            if (!imgPath) {
                imgPath = values.img_src
                    ? await uploadNewImageToServer({
                          img: cast(values.img_src),
                          route: SERVER_ROUTES.STORY_IMAGE_UPLOAD,
                          userId,
                      })
                    : null
            }

            if (values.img_path_delete) {
                await deleteImageFromServer(values.img_path_delete, SERVER_ROUTES.Story_IMAGE_DELETE)
            }

            return mutation_updateStory({ values: { ...values, img_path: imgPath } })
        },
        onSuccess,
    })

    const updateStory = ({
        values,
        onSuccess,
        onSettled,
    }: {
        values: INewStorySchema
        onSuccess?: () => void
        onSettled?: () => void
    }) => {
        updateMutation.mutate({ values }, { onSuccess, onSettled })
    }

    return { insertStory, updateStory }
}
