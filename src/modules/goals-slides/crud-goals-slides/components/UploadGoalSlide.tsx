import { observer } from 'mobx-react-lite'
import { useGoalsSlidesStore } from '@/StoreProvider'
import { useSelectUploadFile } from '@/functions/useSelectUploadFile'
import { UploadGoalSlideCropDialog } from './UploadGoalSlideCropDialog'
import { IconUpload } from '@/assets/icons/IconUpload'

export const UploadGoalSlide = observer(() => {
    const { img_cropped_src, onChangeField } = useGoalsSlidesStore()

    return (
        <div
            title='upload image'
            className='bg-global-bg-plasma  group relative mx-auto
            flex h-[300px] w-[300px] items-center justify-center rounded-md border border-solid border-white/10
            shadow-md transition-shadow duration-300'
        >
            {img_cropped_src && (
                <img src={img_cropped_src} className='absolute h-[300px] w-[300px] rounded-md opacity-10' />
            )}
            <IconUpload
                className='animate-opacity-5 flex text-white/10 opacity-70 duration-300 group-hover:text-blue-600 group-hover:opacity-100'
                width={50}
                height={50}
            />
            <input
                title='upload'
                className='absolute left-0 top-0 z-20 flex h-full w-full cursor-pointer rounded-full opacity-0'
                accept='image/*'
                id='upload-goal-slide-file_input'
                type='file'
                onChange={(e) => {
                    useSelectUploadFile(e, (src: string) => {
                        onChangeField('img_src', src)
                    })
                }}
            />
            <UploadGoalSlideCropDialog />
        </div>
    )
})
