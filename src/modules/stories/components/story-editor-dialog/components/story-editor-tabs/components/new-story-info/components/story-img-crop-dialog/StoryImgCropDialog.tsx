import { useFormikContext } from 'formik'
import { ImgCropper } from '@/components/img-cropper-dialog/ImgCropperDialog'
import { type INewStorySchema } from '@/modules/stories/services/types'

export const StoryImgCropDialog = () => {
    const formikContext = useFormikContext<INewStorySchema>()
    const { img_src_buffer, img_src } = formikContext.values

    const addCroppedImg = async (cropper?: Cropper) => {
        formikContext.setFieldValue('img_src_buffer', undefined)
        formikContext.setFieldValue('img_src', cropper?.getCroppedCanvas().toDataURL())
        if (formikContext.values.img_path) {
            formikContext.setFieldValue('img_path_delete', formikContext.values.img_path)
            formikContext.setFieldValue('img_path', '')
        }
    }

    const onCancel = async () => {
        formikContext.setFieldValue('img_src_buffer', undefined)
        formikContext.setFieldValue('img_src', undefined)
    }

    return <ImgCropper src={img_src} open={!!img_src && !!img_src_buffer} onOk={addCroppedImg} onCancel={onCancel} />
}
