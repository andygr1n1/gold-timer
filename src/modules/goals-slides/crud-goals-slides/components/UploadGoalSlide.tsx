import { observer } from 'mobx-react-lite'
import { useGoalsSlidesStore } from '@/modules/app/mst/StoreProvider'
import { useSelectUploadFile } from '@/helpers/useSelectUploadFile'
import { UploadGoalSlideCropDialog } from './UploadGoalSlideCropDialog'
import { IconUpload } from '@/assets/icons/IconUpload'
import { UploadInput } from '@/components/UploadInput'

export const UploadGoalSlide = observer(() => {
    const { img_cropped_src, onChangeField } = useGoalsSlidesStore()

    return (
        <div
            title='upload image'
            className=' group relative mx-auto
            flex h-[300px] w-[300px] items-center justify-center rounded-md border border-solid 
            border-gray-500/10 shadow-md transition-shadow duration-300'
        >
            {img_cropped_src && (
                <img src={img_cropped_src} className='absolute h-[300px] w-[300px] rounded-md opacity-10' />
            )}
            <IconUpload
                width={64}
                height={64}
                className='text-cText opacity-10 duration-300 group-hover:text-blue-600 group-hover:opacity-100'
            />
            <UploadInput
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
//   <div className=' rounded-full border-solid border-gray-500/10'>

//                                     </div>
