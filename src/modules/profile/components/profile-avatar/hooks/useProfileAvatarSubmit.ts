import { FormikHelpers } from 'formik'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import getCroppedImg from '@/helpers/cropImage'
import { uploadNewImageToServer } from '@/services/image/image.service'
import { cast } from '@/helpers'
import { SERVER_ROUTES } from '@/services/enums'
import { useImageCropper$ } from '@/components/image-cropper/stores/useImageCropper.store'
import { KEY_ImageCropperStore } from '@/components/image-cropper/stores/types'
import { processSuccess } from '@/helpers/processMessage'
import { IUpdateAvatarFormSchema } from '@/modules/profile/services'
import { mutation_updateAvatar } from '@/modules/profile/services/update-avatar/mutation_updateAvatar'

export const useProfileAvatarSubmit = () => {
    const queryClient = useQueryClient()

    const { getCropArea } = useImageCropper$()

    const mutation = useMutation({
        mutationFn: async ({ values }: { values: IUpdateAvatarFormSchema }) => {
            if (!values.imgSrc) return
            const croppedImg = await getCroppedImg(values.imgSrc, cast(getCropArea()))
            const imgPath = await uploadNewImageToServer(cast(croppedImg), SERVER_ROUTES.PROFILE_IMAGE_UPLOAD)
            // TODO AG - DELETE CURRENT AVATAR ON BACKEND
            return mutation_updateAvatar({ imgPath: cast(imgPath) })
        },
    })

    const onSubmit = (values: IUpdateAvatarFormSchema, formikHelpers: FormikHelpers<IUpdateAvatarFormSchema>) => {
        mutation.mutate(
            { values },
            {
                onSuccess: () => {
                    formikHelpers.resetForm()
                    processSuccess(`
                        Avatar successfully updated. Thank you!`)
                },
                onSettled: () => {
                    formikHelpers.setSubmitting(false)
                    queryClient.resetQueries({ queryKey: KEY_ImageCropperStore() })
                    queryClient.invalidateQueries()
                },
            },
        )
    }

    return { onSubmit }
}
