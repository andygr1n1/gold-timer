import { XModal } from '@/components-x/x-modal/XModal'
import { IGoalSlideSchema } from '@/modules/goals-slides/service/types'
import { useFormikContext } from 'formik'
import { ImageCropper } from '@/components/image-cropper/ImageCropper'
import { GoalSlideTItleFormItem } from './GoalSlideTittleFormItem'
import { StyledButton } from '@/components/buttons/StyledButton'

export const InsertGoalSlideDialog = () => {
    const formikContext = useFormikContext<IGoalSlideSchema>()
    const { img_path } = formikContext.values

    return (
        <XModal title={'New Slide'} open={!!img_path} onCancel={formikContext.resetForm}>
            {img_path && (
                <div className='text-cText m-auto flex  flex-col bg-transparent'>
                    <ImageCropper imgPath={img_path} />
                    <GoalSlideTItleFormItem />
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
