import { type FormikHelpers } from 'formik'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { type IGoalSlide, KEY_FetchGoalsSlides } from './types'
import { mutation_insertGoalSlide } from './mutation_insertGoalSlide'
import getCroppedImg from '@/helpers/cropImage'
import { uploadNewImageToServer } from '@/services/image/image.service'
import { cast } from '@/helpers'
import { SERVER_ROUTES } from '@/services/enums'
import { useImageCropper$ } from '@/components/image-cropper/stores/useImageCropper.store'
import { KEY_ImageCropperStore } from '@/components/image-cropper/stores/types'
import { notify } from '@/helpers/processMessage'
import { useUser$ } from '@/services/user-store/userUser.store'

export const useGoalsSlidesFormOnSubmit = () => {
    const { userId } = useUser$()
    const queryClient = useQueryClient()

    const { getCropArea } = useImageCropper$()

    const mutation = useMutation({
        mutationFn: async ({ formData }: { formData: IGoalSlide }) => {
            const croppedImg = await getCroppedImg(cast(formData.img_path), cast(getCropArea()))
            const imgPath = await uploadNewImageToServer({
                img: cast(croppedImg),
                route: SERVER_ROUTES.GOAL_SLIDE_IMAGE_UPLOAD,
                userId,
            })
            return mutation_insertGoalSlide({ title: cast(formData.title), imgPath: cast(imgPath) })
        },
    })

    const onSubmit = (values: IGoalSlide, formikHelpers: FormikHelpers<IGoalSlide>) => {
        mutation.mutate(
            { formData: values },
            {
                onSuccess: () => {
                    formikHelpers.resetForm()
                    notify(`
                        Slide added successfully. Thank you!`)
                },
                onSettled: () => {
                    formikHelpers.setSubmitting(false)
                    queryClient.resetQueries({ queryKey: KEY_ImageCropperStore() })
                    queryClient.invalidateQueries({ queryKey: KEY_FetchGoalsSlides() })
                },
            },
        )
    }

    return { onSubmit }
}
