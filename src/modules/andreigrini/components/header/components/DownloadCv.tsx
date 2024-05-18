import { observer } from 'mobx-react-lite'

export const DownloadCv: React.FC = observer(() => {
    return (
        <div
            className='font-inter text-center lg:text-left w-full lg:max-w-48 font-bold uppercase cursor-pointer 
            text-base h-10 underline hover:decoration-dashed underline-offset-[20px] duration-300'
        >
            DOWNLOAD CV
        </div>
    )
})
