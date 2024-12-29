import { type FormikHelpers } from 'formik'
import { type IGoalSlide } from '@/modules/goals-slides/service/types'
import getCroppedImg from '@/helpers/cropImage'
import { uploadNewImageToServer } from '@/services/image/image.service'
import { cast } from '@/helpers'
import { SERVER_ROUTES } from '@/services/enums'
import { useImageCropper$ } from '@/components/image-cropper/stores/useImageCropper.store'
import { notifySuccess } from '@/helpers/processMessage'
import { useUser$ } from '@/modules/app/mst/StoreProvider'
import { apiGoalsSlidesSlice, useInsertGoalSlideMutation } from '../service/apiGoalsSlidesSlice'
import type { IRootDispatch } from '@/store/types'
import { useDispatch } from 'react-redux'

export const useInsertGoalSlide = () => {
    const { id: userId } = useUser$()
    const [action] = useInsertGoalSlideMutation()
    const dispatch = useDispatch<IRootDispatch>()

    const { getCropArea } = useImageCropper$()

    const onSubmit = async (values: IGoalSlide, formikHelpers: FormikHelpers<IGoalSlide>) => {
        const croppedImg = await getCroppedImg(cast(values.img_path), cast(getCropArea()))

        const img_path = await uploadNewImageToServer({
            img: cast(croppedImg),
            route: SERVER_ROUTES.GOAL_SLIDE_IMAGE_UPLOAD,
            userId,
        })

        const title = values.title

        if (!img_path || !title) return

        action({ img_path, title })
            .unwrap()
            .then((data) => {
                dispatch(
                    apiGoalsSlidesSlice.util.updateQueryData('getGoalsSlides', userId, (draft: IGoalSlide[]) => {
                        return [data, ...draft]
                    }),
                )
                notifySuccess('Slide added successfully')
            })
            .finally(() => {
                formikHelpers.setSubmitting(false)
            })
    }

    return { onSubmit }
}
