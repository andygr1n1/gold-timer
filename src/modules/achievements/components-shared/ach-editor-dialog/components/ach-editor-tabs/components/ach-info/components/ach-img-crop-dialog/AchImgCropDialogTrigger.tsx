import { useSelectUploadFile } from '@/helpers/useSelectUploadFile'
import { UploadInput } from '@/components/UploadInput'
import { useFormikContext } from 'formik'
import { IAchSchema } from '@/modules/achievements/services/types'
import { IconUpload } from '@/assets/icons'
import { FormLabel } from '@/components/form/FormLabel'

export const AchImgCropDialogTrigger = () => {
    const formikContext = useFormikContext<IAchSchema>()
    const { img_src, img_path } = formikContext.values
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        useSelectUploadFile(e, (src: string) => {
            formikContext.setFieldValue('img_src', src)
            formikContext.setFieldValue('img_src_buffer', src)
        })
    }

    return (
        <div>
            <FormLabel title='Logo' />
            <div
                data-testid='profile-avatar-index'
                className='group relative mx-auto
            flex h-[300px] w-[calc(100%-40px)] p-5 items-center justify-center rounded-md border border-solid 
            border-blue-900 hover:border-blue-600 shadow-md transition-shadow duration-300'
            >
                {(img_path || img_src) && (
                    <img
                        src={img_src || img_path}
                        className='absolute top-0 left-0 right-[120px] w-full h-full opacity-[0.04] rounded-md z-1'
                    />
                )}
                {(img_path || img_src) && (
                    <img src={img_src || img_path} className='absolute h-[300px] w-[300px] rounded-md z-10' />
                )}
                <IconUpload width={64} height={64} className='duration-300 group-hover:text-blue-600 text-blue-900 ' />
                <UploadInput onChange={onChange} />
            </div>
        </div>
    )
}
