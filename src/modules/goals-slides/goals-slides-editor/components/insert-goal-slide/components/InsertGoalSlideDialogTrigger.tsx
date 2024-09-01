import { observer } from 'mobx-react-lite'
import { useSelectUploadFile } from '@/helpers/useSelectUploadFile'
import { IconUpload } from '@/assets/icons/IconUpload'
import { UploadInput } from '@/components/UploadInput'
import { useFormikContext } from 'formik'
import { type IGoalSlide } from '@/modules/goals-slides/service/types'

export const InsertGoalSlideDialogTrigger = observer(() => {
    const formikContext = useFormikContext<IGoalSlide>()
    const { img_path } = formikContext.values

    return (
        <div
            title='upload image'
            className='group relative mx-auto
            flex h-[300px] w-[300px] items-center justify-center rounded-md border border-solid 
            border-gray-500/10 shadow-md transition-shadow duration-300'
        >
            {img_path && <img src={img_path} className='absolute h-[300px] w-[300px] rounded-md opacity-10' />}
            <IconUpload
                width={64}
                height={64}
                className='text-cText opacity-10 duration-300 group-hover:text-blue-600 group-hover:opacity-100'
            />
            <UploadInput
                onChange={(e) => {
                    useSelectUploadFile(e, (src: string) => {
                        formikContext.setFieldValue('img_path', src)
                    })
                }}
            />
        </div>
    )
})
