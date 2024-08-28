import { XModal } from '@/components-x/x-modal/XModal'
import { useFormikContext } from 'formik'
import { type IUpdateAvatarFormSchema } from '../../services'
import { StyledButton } from '@/components/buttons/StyledButton'
import { ImageCropper } from '@/components/image-cropper/ImageCropper'

export const ProfileImageCropDialog = () => {
    const formikContext = useFormikContext<IUpdateAvatarFormSchema>()
    const { imgSrc } = formikContext.values

    return (
        <XModal title={'Avatar'} open={!!imgSrc} onCancel={formikContext.resetForm}>
            {imgSrc && (
                <div className='text-cText m-auto flex  flex-col bg-transparent'>
                    <ImageCropper imgPath={imgSrc} />
                    <StyledButton
                        disabled={formikContext.isSubmitting}
                        className='w-full'
                        onClick={() => formikContext.handleSubmit()}
                    >
                        Save
                    </StyledButton>
                </div>
            )}
        </XModal>
    )
}
