import { useFormikContext } from 'formik'
import { type IAchEditor } from '@/modules/achievements/services/types'
import { ImgCropper } from '@/components/img-cropper-dialog/ImgCropperDialog'

export const AchImgCropDialog = () => {
    const formikContext = useFormikContext<IAchEditor>()
    const { img_src_buffer, img_src } = formikContext.values

    const addCroppedImg = async (cropper?: Cropper) => {
        formikContext.setFieldValue('img_src_buffer', undefined)
        formikContext.setFieldValue('img_src', cropper?.getCroppedCanvas().toDataURL())
    }

    const onCancel = async () => {
        formikContext.setFieldValue('img_src_buffer', undefined)
        formikContext.setFieldValue('img_src', undefined)
    }

    return <ImgCropper src={img_src} open={!!img_src && !!img_src_buffer} onOk={addCroppedImg} onCancel={onCancel} />
}
