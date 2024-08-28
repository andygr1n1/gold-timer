import { useSelectUploadFile } from '@/helpers/useSelectUploadFile'
import { ProfileAvatar } from '@/modules/profile/components/profile-avatar/components/ProfileAvatar'
import { UploadInput } from '@/components/UploadInput'
import { UploadHoverAnimation } from './components/UploadHoverAnimation'
import { useFormikContext } from 'formik'
import { type IUpdateAvatarFormSchema } from '../../services'

export const ProfileImageCropDialogTrigger = () => {
    const formikContext = useFormikContext<IUpdateAvatarFormSchema>()
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        useSelectUploadFile(e, (src: string) => {
            formikContext.setFieldValue('imgSrc', src)
        })
    }

    return (
        <div data-testid='profile-avatar-index' className='group relative mx-auto w-fit rounded-full'>
            <ProfileAvatar />
            <UploadHoverAnimation />
            <UploadInput onChange={onChange} />
        </div>
    )
}
