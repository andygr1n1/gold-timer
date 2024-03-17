import { IconUpload } from '@/assets/icons'

export const UploadHoverAnimation: React.FC = () => {
    return (
        <div
            className='w-full h-full flex absolute opacity-0 group-hover:opacity-100 top-0 z-10 transition-all 
            rounded-full duration-300 items-center justify-center bg-blue-100/20'
        >
            <IconUpload className='min-w-[50px] min-h-[50px] text-blue-600 ' />
        </div>
    )
}
