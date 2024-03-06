import { IconRoyalLove } from '@/assets/icons/IconRoyalLove'
import { NavLink } from 'react-router-dom'

export const EyeTrainingPreview: React.FC = () => {
    return (
        <div
            className='group cursor-pointer bg-global-2-bg flex max-h-[350px] min-h-[350px] w-full flex-[100%] 
                rounded-md shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] 2lg:flex-[45%]'
        >
            <NavLink to={`/stories/healing-eye`} className='flex flex-col items-center justify-center w-full'>
                <h1 className='text-center w-full group-hover:!opacity-100'>Healing Eye</h1>
                <IconRoyalLove className='max-w-[100px] max-h-[100px] text-amber-500 w-full h-full my-10 group-hover:animate-pulse' />
            </NavLink>
        </div>
    )
}
