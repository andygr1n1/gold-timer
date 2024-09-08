import { useSelectUploadFile } from '@/helpers/useSelectUploadFile'
import { UploadInput } from '@/components/UploadInput'
import { useFormikContext } from 'formik'
import { type IAchEditor } from '@/modules/achievements/services/types'
import { IconUpload } from '@/assets/icons'
import { FormLabel } from '@/components/form/FormLabel'
import { cn } from '@/helpers/cn'

export const AchImgCropDialogTrigger = () => {
    const formikContext = useFormikContext<IAchEditor>()
    const { img_src, img_path } = formikContext.values
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        useSelectUploadFile(e, (src: string) => {
            formikContext.setFieldValue('img_src', src)
            formikContext.setFieldValue('img_src_buffer', src)
        })
    }

    console.log('img_path', img_path)

    const error = formikContext.touched.title && Boolean(formikContext.errors.img_src)

    const errorMessage = formikContext.errors.img_src

    const imgSrc = img_path || img_src

    return (
        <div>
            <FormLabel title='Logo' />
            <div
                data-testid='profile-avatar-index'
                className={cn(
                    `group relative mx-auto flex h-[300px] w-[calc(100%-40px)] p-5
                    items-center justify-center rounded-md border border-solid
                    border-blue-900/20 hover:border-blue-600/20 shadow-md transition-shadow duration-300`,
                    error && 'border-red-500 hover:border-red-500',
                )}
            >
                {imgSrc && (
                    <img
                        src={
                            img_src ||
                            `${import.meta.env['VITE_FIRE_BUNNY_STORAGE']}achievements/${img_path}` ||
                            undefined
                        }
                        className='absolute top-0 left-0 right-[120px] w-full h-full opacity-[0.04] rounded-md z-1'
                    />
                )}
                {imgSrc && (
                    <img
                        src={
                            img_src ||
                            `${import.meta.env['VITE_FIRE_BUNNY_STORAGE']}achievements/${img_path}` ||
                            undefined
                        }
                        className='absolute h-[300px] w-[300px] rounded-md z-10'
                    />
                )}
                <IconUpload
                    width={64}
                    height={64}
                    className={cn(
                        'duration-300 group-hover:text-blue-600 text-blue-900',
                        error && 'text-red-900/50 group-hover:text-red-900',
                    )}
                />
                <UploadInput onChange={onChange} />
                {error && errorMessage && (
                    <div
                        data-testid='error-message'
                        className='font-kzen bg-global-3-bg absolute bottom-[-6px] left-2 z-20 m-0 rounded-full p-0 px-1 text-xs leading-3 text-red-700 '
                    >
                        {errorMessage}
                    </div>
                )}
            </div>
        </div>
    )
}
