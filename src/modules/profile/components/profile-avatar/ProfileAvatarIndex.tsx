import { Form, Formik } from 'formik'
import { ProfileImageCropDialog } from './ProfileImageCropDialog'
import { ProfileImageCropDialogTrigger } from './ProfileImageCropDialogTrigger'
import { type IUpdateAvatarFormSchema } from '../../services'
import { useProfileAvatarSubmit } from './hooks/useProfileAvatarSubmit'

export const ProfileAvatarIndex = () => {
    const { onSubmit } = useProfileAvatarSubmit()

    return (
        <>
            <Formik<IUpdateAvatarFormSchema> enableReinitialize initialValues={{ imgSrc: '' }} onSubmit={onSubmit}>
                <Form className='flex flex-col gap-5'>
                    <ProfileImageCropDialogTrigger />
                    {/* * */}
                    {/* D I A L O G S */}
                    <ProfileImageCropDialog />
                </Form>
            </Formik>
        </>
    )
}
